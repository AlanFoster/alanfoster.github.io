---
layout: post
title:  Feature testing with Capybara page objects
date:   2017-05-31 17:33:53
category: post
---


Page objects can be used as a powerful method of abstracting your tests from implementation. Importantly they can be used reduce fragile tests, and promote DRYness - via the encapsulation of common functionality within simple methods.

In plain terms:

> A page object is an instance of a `class` which abstracts the underlying user interface from your tests, providing methods to interact with the UI, and extract any required information.

### Terminology

Unfortunately page objects are an overloaded term. In my experience there are generally three types of page objects:

- *Component Objects* - A page object which represents a particular component, or widget, on a user interface. For instance a Table, menu, article, etc.

  If you are coming from a React background, React components/Classes are generally a one to one mapping with this concept.

- *Page Objects* - A page object can describe a particular screen, or user interface, within a web application or native application. It can be composed of multiple component objects, and can provide convenience methods for interacting with the abstraction that it is wrapping.

- *Experience* - These are commonly used to group together complex functionality that may require multiple steps, and interact with multiple pages. In my experience I have used this concept to abstract complex welcome tour functionality, creation wizards, and other complex flows.

### Example

Consider a simple RSpec Capybara test that creates blogs and does not make use of page objects:

```ruby
require 'feature_helper'

feature 'Blog management', type: :feature do
  scenario 'Successfully creating a new blog' do
    visit '/'

    click_on 'Form Examples'
    expect(page).to have_content('Create Blog')

    fill_in 'blog_title', with: 'My Blog Title'
    fill_in 'blog_text', with: 'My new blog text'

    click_on 'Save Blog'
    expect(page).to have_selector('.blog--show')

    expect(page).to have_content('My Blog Title')
    expect(page).to have_content('My new blog text')
  end

  scenario 'Entering no data' do
    visit '/'
    click_on 'Form Examples'

    expect(page).to have_content('Create Blog')

    click_on 'Save Blog'

    expect(page).to have_content('4 errors stopped this form being submitted')

    expect(page).to have_content("Title can't be blank")
    expect(page).to have_content("Text can't be blank")

    expect(page).to have_content('Title is too short')
    expect(page).to have_content('Text is too short')
  end
end
```

Looking at this snippet - there are multiple concerns. There is the act of navigating to the appropriate page, interacting with the page, and asserting content. It is also possible to see duplicated code that could potentially be more DRY.

Importantly this code can become difficult to maintain if there are changes to application under test. For instance element classes/names/ids may change, there will be multiple places of update required.

There is also a lack of 'semantic context' within this code, it can be hard to see what lines of code are logically grouped together.

### Introducing Page Objects

As discussed within the terminology section, Page Objects can be used to provide abstractions for the view layer.

Taking the previous example, and introducing a PageObject for creating new blogs, and viewing blogs, we can begin to clear up our previous example.

Without providing specific implementation details, the end-goal should be readable, and lacking specific user interface details should as class names, xpaths etc:

```ruby
require 'feature_helper'
require_relative '../pages/new_blog'
require_relative '../pages/view_blog'

feature 'Blog management', type: :feature do
  let(:new_blog_page) { ::Pages::NewBlog.new }
  let(:view_blog_page) { ::Pages::ViewBlog.new }

  before :each do
    new_blog_page.visit_location
  end

  scenario 'Successfully creating a new blog' do
    new_blog_page.create title: 'My Blog Title',
                         text: 'My new blog text'

    expect(view_blog_page).to have_loaded
    expect(view_blog_page).to have_blog title: 'My Blog Title',
                                        text: 'My new blog text'
  end

  scenario 'Entering no data' do
    new_blog_page.create title: '',
                         text: ''

    expect(view_blog_page).to_not have_loaded
    expect(new_blog_page).to have_errors "Title can't be blank",
                                         "Text can't be blank",
                                         "Title is too short",
                                         "Text is too short"
  end
end
```


### Creating Page Objects

The first step of creating page objects is to create the basic page class structure:

```ruby
module Pages
  class NewBlog
    include RSpec::Matchers
    include Capybara::DSL

    # ...
  end
end
```

The inclusion of `Capybara::DSL` will allow for instances of the Page Object to have access to Capybara's domain specific language:

```ruby
has_css? '.foo'
has_content? 'hello world'
find('.foo').click
```

I have additionally chosen to make use of `include RSpec::Matchers` within the above examples in order to use RSpec's expectation library.

Some purists may follow the convention that Page Objects should _not_ have inbuilt expectations. However I preference this approach in order to rely on Capybara's inbuilt mechanisms to handle race conditions where appropriate.

For instance with the following code, Capybara will wait until `foo` is present within the page object, or it will fail:

```ruby
expect(self).to have_content 'foo'
```

However, within the following code:

```ruby
expect(page_object.content).to match 'foo'
```

It is possible to have unexpected race conditions as `page_object.content` is immediately evaluated, and potentially not valid yet, and asserted upon. For more examples, I would recommend reading thoughtbot's [writing reliable asynchronous integration tests with capayara](https://robots.thoughtbot.com/write-reliable-asynchronous-integration-tests-with-capybara#checking-a-field39s-value).

### Adding methods

We can abstract the location that we wish to visit within a single method:

```ruby
def visit_location
  visit '/blogs/new'
  # It can be beneficial to assert something positive about the page
  # before progressing with your tests at this point
  #
  # This can be useful to ensures that the page has loaded successfully, and any
  # asynchronous JavaScript has been loaded and retrieved etc.
  #
  # This is required to avoid potential race conditions.
  expect(self).to have_loaded
end

def has_loaded?
  self.has_selector? 'h1', text: 'Create Blog'
end
```

It is important to provide semantically clear methods to your page objects:

```ruby
def create(title:, text:)
  # ...
end

def has_errors?(*errors)
  # ...
end

def has_error?(error)
  # ...
end
```

In general it is important to follow provide [functionally cohesive methods](https://en.wikipedia.org/wiki/Cohesion_(computer_science)), and where possible adhere to the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).

### Component Objects

In our example we are making use of a `NewBlog` class, but the implementation for `create` was missing.

As we are interacting with a form, we could additionally introduce a class to represent this component:

```ruby
# ...

def create(title:, text:)
  blog_form.new.create title: title,
                       text: text
end

# ...

private

def blog_form
  ::Components::BlogForm
end
```

Where the implementation for `BlogForm` might be:

```ruby
module Components
  class BlogForm
    include RSpec::Matchers
    include Capybara::DSL

    def create(title:, text:)
      within blog_form do
        fill_in 'blog_title', with: title
        fill_in 'blog_text', with: text

        click_on 'Save Blog'
      end
    end

    private

    def blog_form
      find('.blog--new')
    end
  end
end
```

### Wiring everything together

With the above classes, it will now be possible to require and instantiate your page objects within your feature spec:

```ruby
require 'feature_helper'
require_relative '../pages/new_blog'
require_relative '../pages/view_blog'

feature 'Blog management', type: :feature do
  let(:new_blog_page) { ::Pages::NewBlog.new }
  let(:view_blog_page) { ::Pages::ViewBlog.new }

  # ...
end
```

_Note_: I have intentionally chosen to require the page object manually at the top of the feature file. In some RSpec applications it may be convenient to auto-load all support files and provide access to them within feature files, however this can become overwhelming with large code bases. In particular it will lead to slow start-up times, and potential unintentional cyclic dependencies.

### Calling page objects

Within each scenario we will now have access to the `new_blog_page` and `view_blog_page` instances:

```ruby
scenario 'Successfully creating a new blog' do
  new_blog_page.create title: 'My Blog Title',
                       text: 'My new blog text'

  expect(view_blog_page).to have_loaded
  expect(view_blog_page).to have_blog title: 'My Blog Title',
                                      text: 'My new blog text'
end
```

### Naming Conventions / Predicate Methods

As with most things in Rails/Ruby, there are conventions that may not be fully appreciated at first sight.

Within our tests we interacted with the page object with `have_loaded` and `have_blog`:

```ruby
expect(view_blog_page).to have_loaded
expect(view_blog_page).to have_blog title: 'My Blog Title',
                                    text: 'My new blog text'
```

However, our page object's method names are actually `has_loaded?` and `has_blog?`:

```ruby
def has_loaded?
  # ...
end

def has_blog?(title:, text:)
  # ...
end
```

This is a subtle difference to notice, and attention should be drawn to it. For more details on this convention, I would recommend the [predicate matchers](https://relishapp.com/rspec/rspec-expectations/v/3-5/docs/built-in-matchers/predicate-matchers) documentation.

### Source code

For a full example please see the Github pull request [here](https://github.com/AlanFoster/rspec-capybara-feature-testing/pull/13/files)

### Additional resources

- [Martin Fowler - Page Objects](https://martinfowler.com/bliki/PageObject.html)
- [Write Reliable, Asynchronous Integration Tests With Capybara](https://robots.thoughtbot.com/write-reliable-asynchronous-integration-tests-with-capybara)
- [Page object DSL for capybara](https://github.com/natritmeyer/site_prism)
- [Formulaic - Form input generation](https://github.com/thoughtbot/formulaic)
