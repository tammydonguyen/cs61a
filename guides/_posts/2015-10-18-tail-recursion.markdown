---
layout: post
title:  "Tail Recursion"
date:   2015-10-18 11:14:11
categories: guides
---
**This page is under construction!**

----

Scheme supports optimized tail recursion, meaning that if a function is called in **tail context**, Scheme will close the frame that called it and simply return the value that the tail call returns. Scheme thus allows for an unbounded number of tail calls, unlike Python, which will raise a `RuntimeError: 'maximum recursion depth exceeded'` because all the frames stay open. 

To write a tail-call optimized function in Scheme, you must make all recursive calls in a tail context.

---

#### Tail Context 
An expression is in a **tail context** if it is the last expression to be evaluated in the frame. Thus, a call expression is a **tail call** if it is one of the following:  

* the last sub-expression in the body of a tail-context `lambda` expression
* the second or third sub-expression in a tail-context `if` expression
* a non-predicate sub-expression in a tail-context `cond` expression
* the last sub-expression in a tail-context `and` or `or` expression
* the last sub-expression in a tail-context `begin` expression

A function is then **tail recursive** if the recursive call(s) is a/are tail call(s).

#### Test your understanding  

**Answer these questions for the following functions.**    

1. What are the tail calls?   
2. Are the recursive calls tail calls?   
3. Is the function tail recursive?   

{% highlight scheme %}
(define (foo x y)
    (if (> x y) 
        (foo (- x y)) 
        (+ x y)))
{% endhighlight %}

<blockquote class="solution">
<ol>
  <li> <code>(foo (- x y))</code> is a tail call because it is the second subexpression in the <code>if</code> expresssion. <code>(+ x y)</code> is also a tail call because it is the third subexpression in the <code>if</code> expression.  </li>
  <li> Yes, the recursive call <code>(foo (- x y))</code> is a tail call.  </li>
  <li> Yes, because the recursive call is a tail call.</li>
</ol>
</blockquote>

<a class="btn btn-default solution-toggle">TOGGLE SOLUTION</a>

{% highlight scheme %}
(define (bar x)
    (if (bar x) x
        (- (bar 9) 1))
{% endhighlight %}

<blockquote class="solution-2">
<ol>
<li><code>(- (bar 9) 1)</code> is a tail call because it is the third subexpression in the <code>if</code> expresssion.</li>
<li>The recursive calls <code>(bar x)</code> is not a tail call because it is the first subexpression in the <code>if</code> expression. The recursive call <code>(bar 9)</code> is also not a tail call because it is an argument of the tail call.</li>
<li>No, because the recursive calls are not tail calls.</li>
</ol>
</blockquote>

<a class="btn btn-default solution-toggle-2">TOGGLE SOLUTION</a>

{% highlight scheme %}
(define (baz x)
    (cond ((bar x) (begin (foo x x) (baz (+ x x))))
        ((baz 1) (baz 2))
        (else (and (foo x 1) #t (bar 4))))
      )
{% endhighlight %}

<blockquote class="solution-3">
<ol>
<li><code>(baz (+ x x))</code> is a tail call because it is the last subexpression in a tail-context <code>begin</code> expression. <code>(baz 2)</code> is a tail call because it is a non-predicate subexpression in the <code>cond</code> expression. <code>(bar 4)</code> is a tail call because it is the last subexpression in a tail-context <code>and</code> expression.</li>  
<li>Two of the tail calls mentioned above are recursive calls. The recursive call <code>(baz 1)</code> is not a tail call because it is a predicate subexpression in the <code>cond</code> expression.  </li>
<li>No, even though there are two recursive tail calls, there is a recursive call that is not a tail call.</li>
</ol>
</blockquote>
<a class="btn btn-default solution-toggle-3">TOGGLE SOLUTION</a>

<a name="keep" class="anchor"></a>

## Writing tail recursive functions
Often, you may find it easier to first come up with an iterative solution in Python and convert it into a tail recursive Scheme solution. For example, let's try to write a function that makes a list out of the first `n` elements of a given `lst` (assume `lst` is at least length `n`). If you want to try this out on your own first, click [here](/cs61a/practice-problems/final.html#tail).

To do this, we would start with an empty `result` list and keep a counter, adding elements to `result` from `lst` until our counter hits `n`. Here's the iterative Python version for a linked list:  
    
{% highlight python %}
def keep_first_n(link, n):
    i, result = 0, Link.empty
    while i < n:
        result = Link(link.first, result)
        link = link.rest
        i += 1
    return result
{% endhighlight %}

Since there are no `while` loops in Scheme, we can imitate this using a helper function! A helper function will keep track of variables that change in its parameters! In this case, the counter `i`, our `result` list, and the link pointer change, so our helper function will take in three parameters `i`, `result`, and `lst`.
    
{% highlight scheme %}
(define (keep-first-n lst n)
  (define (keep-helper i result lst)

    ))
{% endhighlight %}

To simulate the `while` condition, we use a base case to return our result when we're done. We want to stop adding to `result` and return it when `i` is equal to `n`. Whatever happens in the while loop will go in the "else" case.
  
{% highlight scheme %}
(define (keep-first-n lst n)
  (define (keep-helper i result)
      (if (= i n) result)
    ))
{% endhighlight %}

So far, so good. Now we need to take care of what goes on in the `while` loop, which is updating `result`, `lst`, and `i`. Using recursion, we simply update our "variables" by passing their new values as arguments to a recursive call.

{% highlight scheme %}
(define (keep-first-n lst n)
  (define (keep-helper i result)
      (if (= i n) result
        (keep-helper (+ i 1) (append result (list (car lst))) (cdr lst)))
    ))
{% endhighlight %}

Almost done! All that's left to do now is initialize our "variables". To do this, call our helper function in the body of the original function with the initial values as arguments.

{% highlight scheme %}
(define (keep-first-n lst n)
  (define (helper i result lst)
      (if (= i n) result
        (helper (+ i 1) (append result (list (car lst))) (cdr lst)))
    )
  (helper 0 '() lst))
{% endhighlight %}

This function is now a tail-recursive version of the iterative solution!
