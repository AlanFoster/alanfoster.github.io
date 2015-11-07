---
layout: post
title:  Implementing Finite State Machines using Java's enums
date:   2012-01-22 16:57:21
---

I often see a lot of java programs which make use of enums for finite state machines. They perform logic based on switch statements. For instance they may do:

{% highlight java %}
protected enum State {
  FOO, BAR;
}

public static void main(String[] args) {
  State currentState = State.FOO;
  switch (currentState) {
    case FOO :
      // Perform specific logic
      break;
    case BAR :
      // Perform specific logic
      break;
  }
}
{% endhighlight %}


Sure, this is fine. But it's not exactly very flexible is it? It's not taking advantage of the fact that enums can offer logic within the enum itself. For instance enums can offer a public abstract void method, which all enum constants must override and implement logic to.

For instance

{% highlight java %}
protected enum State {
  FOO {
    @Override
    protected void logic() {
      // Perform specific logic
    }
  },
  BAR {
    @Override
    protected void logic() {
      // Perform specific logic
    }
  };

  protected abstract void logic();
}
{% endhighlight %}

This means we can now execute our logic by doing

{% highlight java %}
public static void main(String[] args) {
  State currentState = State.FOO;
  currentState.logic();
}
{% endhighlight %}

Therefore it doesn't take much imagination to take this a step further and implement an 'actual' Java state machine such as

{% highlight java %}
protected enum State {
  FOO {
    int i;
    @Override
    protected State execute() {
      return i++ >= 2 ? BAR : this;
    }
  },

  BAR {
    int i = 0;
    @Override
    protected State execute() {
			return i++ == 0 ? FOO : HALT;
    }
  },

  HALT {
    @Override
    protected State execute() {
      return null;
    }
  };

  protected abstract State execute();
}

public static void main(String[] args) {
  State currentState = State.FOO;
  while((currentState = currentState.execute()) != State.HALT) {
    System.out.println(currentState);
  }
}
{% endhighlight %}

Hopefully this helps someone learn a bit more about enums, and potentially how to implement a finite state machine in java using enums.
