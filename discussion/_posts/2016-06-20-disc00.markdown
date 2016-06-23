---
layout: post
title:  "Discussion 0"
date:   2016-06-20 13:00:00
categories: discussion
---

# Links  
[Slides](http://docs.google.com/presentation/d/11jqbMGTiebjUpSp9UO-P1ZhTO3Rla06qrWbvcRGdr1s/edit#slide=id.gba074a2be_1_15)  

--------

# Concepts  
1. (values, expressions) `_________` evaluate to `___________`.
2. How do you evaluate a name?
3. What is the difference between a function and a function call?
4. What are the 3 steps to evaluating function calls, or call expressions?
5. What is the purpose of an assignment statement? Which side do you evaluate first when executing an assignment statement?

# Problems   

### Question 1  

{% highlight python %}
>>> a = 3
>>> b = a
>>> c = "a"
{% endhighlight %}

What is `a + b`? What is data type of the value stored in `c`?

<a class="btn btn-default solution-toggle">TOGGLE SOLUTION</a>

<blockquote class="solution">
<code>a + b</code> is <code>6</code>. The value <code>3</code> gets assigned to <code>b</code> in the second statement. The value stored in <code>c</code> is <code>"a"</code> which is a string.
</blockquote>

 --- 
  
### Question 2

The following code is entered into the Python interpreter.
   
{% highlight python %}
>>> x = 30
>>> def foo(x):
        x = 50
        return x + 50 
{% endhighlight %}    

If I call the function `foo` with argument `x`, what would the return value be?

<a class="btn btn-default solution-toggle-2">TOGGLE SOLUTION</a>

<blockquote class="solution-2">
The value <code>30</code> is passed in as an argument and is bound to <code>x</code>. Inside of the function body, <code>x</code> assigned to the number 50 in the local frame. Variables in the local frame have priority over variables in the global frame, so the value that is returned is <code>100</code>.
</blockquote>

