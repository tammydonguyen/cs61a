---
layout: post
title:  "Recursion"
date:   2015-10-18 11:14:11
categories: guides
---

**This page is under construction!**

----

Recursion allows you to solve problems by breaking it into smaller pieces until you get a piece small enough that you know the answer to. Think of it like this: you're in line to get ice cream and you want to know how many people are in front of you. Instead of manually counting every person in line, you figure you can just ask the person in front of you how many people are in front of him/her, and then add 1 to that number! You don't care how this person gets this number, but you're just going to assume it's correct and then use that to solve your problem. This is what many refer to as the recursive *leap of faith*. You are assuming that random stranger tells you the correct number. You want to be thinking in this mindset when you write recursive solutions; even if you don't think your function is written correctly, just assume it will *return the correct value*. Now, all you have to do is figure out what to do with this value to solve your problem. In this case, all you do is add 1 to account for the person that you asked.

---

### Factorials
Let's first take a look at a very simple mathematical example: factorials. A factorial of a number `n` (written `n!`) is defined as the product of all the whole numbers from `1` to `n` inclusive. For example, `factorial(4)` is `4 * 3 * 2 * 1 = 24`. It would be easy to write this iteratively:

{% highlight python %}
def factorial(n):
    total = 1      # start at 1
    while n > 1:   # until n is 1, multiple total by n and decrement n
      total = total * n      
      n = n - 1
    return total   # total is now 1 * 2 * ... * (n - 1) * n
{% endhighlight %}

However, a recursive solution is much more readable and concise, because it does *exactly* what the definition of a factorial describes. Looking at `4!`, we notice that the expression `4 * 3 * 2 * 1` contains `3 * 2 * 1`, which is actually just `3!`. So really, `4! = 4 * 3!`, or more generally, `n! = n * (n - 1)!`. From this, we can attempt to write `factorial` recursively:

{% highlight python %}
def factorial(n):
  return n * factorial(n - 1)
{% endhighlight %}

`factorial(n - 1)` is known as the **recursive call**. Notice that we call it on a smaller argument; we are using the solution of a smaller problem to solve a bigger one! However, this solution isn't completely correct yet. Since a call to `factorial` returns a call to `factorial`, albeit with a smaller arugment, this will cause an infinite loop. How do we fix this? Well, we know that at some point, our problem gets small enough that we no longer have to ask the previous number for its factorial, because we already know the answer! This happens when `n = 0` or `n = 1`. When a user passes through `0` or `1`, there's no need to find `(n - 1)!` because their factorials are defined as `1`. This is called a **base case**. Thus, our solution becomes

{% highlight python %}
def factorial(n):
  if n < 1:
    return 1
  return n * factorial(n - 1)
{% endhighlight %}

<!-- ### How to Approach Problems
The way that we approached the factorial problem is definitely not the only way you should go about finding recursive solutions. That specific approach worked because we noticed that the definition of factorial involves solving for a smaller factorial. Sometimes, you may find it easy to start with the base case(s). -->