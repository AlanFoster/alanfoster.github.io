---
layout: post
title:  JavaScript Abuse
date:   2012-01-28 09:33:53
category: post
---

If there's one thing I like to do in life, it's abuse JavaScript.

Can you guess what this code does?

{% highlight javascript %}
_= +!![],__$=_+_,__=__$|_,$$=__$<<_,_$=$$+$$,____=![]+[],$_$=({})+[],$$$=[][_]+[],$__=$_$[_],$$_=(!![]+[])[_],_$_=$_$[__<<_],$_$$=____[$$],$=[][____[__]+$__+$$_+_$_] + [],_$$=____[__$],$_$_="h",___=[][($__$=$[__]+$__+$[__$]+____[__]+_$_+$$_+$[_]+$[__]+_$_+$__+$$_)][$__$]($$_+$_$$+_$_+$[_]+$$_+$[__$]+$[_$]+_$_+$_$_+$$$[$$+_]+____[__])(),___[____[_]+_$$+$_$$+$$_+_$_]($_$_+$_$$+_$$+_$$+$__+$[_$]+($$__=___+[])[$$__[_$$+$_$$+$$$[_]+([[]+[]][+[]][$__$]+[])[_$+$$+__$]+_$_+$_$_]-__$]+$__+$$_+_$$+$$$[_$])
{% endhighlight %}

Yep, you guessed it, it alerts `hello world`. Ah, the craziness that is JavaScript.
As a quick explanation, this is briefly what's happening in the above code!

{% highlight javascript %}
!![] == true
!![]+[] == "true"
(!![]+[])[0] == "t"
+![] == 0

// Therefore
(!![]+[])[+![]] == "t"
{% endhighlight %}


Basically we just construct strings and get the chars that we need. What do we do with strings? Well, we then take advantage of one of the two methods of accessing fields members within JavaScript objects

{% highlight javascript %}
foo["bar"] === foo.bar
{% endhighlight %}

IE, we can construct the strings we require, such as bar, and access it through the object foo.
