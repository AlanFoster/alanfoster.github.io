---
layout: post
title: JavaScript Fun
date: 2012-01-28 09:33:53
category: post
---

If there's one thing I like to do in life, it's have fun with JavaScript.

Can you guess what this code does?

<!-- prettier-ignore -->
```javascript
_= +!![],__$=_+_,__=__$|_,$$=__$<<_,_$=$$+$$,____=![]+[],$_$=({})+[],$$$=[][_]+[],$__=$_$[_],
$$_=(!![]+[])[_],_$_=$_$[__<<_],$_$$=____[$$],$=[][____[__]+$__+$$_+_$_] + [],_$$=____[__$],
$_$_="h",___=[][($__$=$[__]+$__+$[__$]+____[__]+_$_+$$_+$[_]+$[__]+_$_+$__+$$_)][$__$]($$_+
$_$$+_$_+$[_]+$$_+$[__$]+$[_$]+_$_+$_$_+$$$[$$+_]+____[__])(),___[____[_]+_$$+$_$$+$$_+_$_](
$_$_+$_$$+_$$+_$$+$__+$[_$]+($$__=___+[])[$$__[_$$+$_$$+$$$[_]+([[]+[]][+[]][$__$]+[])[_$+$$
+__$]+_$_+$_$_]-__$]+$__+$$_+_$$+$$$[_$])
```

<!-- end-excerpt -->

Yep, you guessed it, it alerts `hello world`. Ah, the craziness that is JavaScript.
As a quick explanation, this is briefly what's happening in the above code!

<!-- prettier-ignore -->
```javascript
!![] == true
!![]+[] == "true"
(!![]+[])[0] == "t"
+![] == 0

// Therefore
(!![]+[])[+![]] == "t"
```

Basically we just construct strings and get the chars that we need. What do we do with strings? Well, we then take advantage of one of the two methods of accessing fields members within JavaScript objects

```javascript
foo["bar"] === foo.bar;
```

IE, we can construct the strings we require, such as bar, and access it through the object foo.
