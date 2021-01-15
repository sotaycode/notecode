---
layout: post
title:  "JSX React"
date:   2021-01-15 01:15:20
categories: Giới thiệu về JSX.
---

# Giới thiệu về JSX

### 1. JSX

{% highlight react rouge%}
const element = <h1>Hello, world!</h1>;
{% endhighlight %}

Line code phía trên được gọi là JSX, JSX là một syntax extension to Javascript. 

JSX cung cấp cho chúng ta những cú pháp dễ đọc hay thể hiện đơn giản (syntactic sugar).

Code được viết bằng JSX sẽ được biên dịch sang javascript để trình duyệt (browser) hiểu được.

{% highlight java rouge%}
React.createElement(
    "h1", 
    null, 
    "Hello, world!"
);
{% endhighlight %}

### 2. Biểu thức JSX

- Thay thế chuỗi:

JSX:

{% highlight react rouge%}
const name = 'Blog';
const element = <h1>Hi, {name}</h1>;
{% endhighlight %}

Javascript:

{% highlight javascript rouge%}
const name = "Blog";
const element = /*#__PURE__*/ React.createElement("h1", null, "Hi, ", name);
{% endhighlight %}

- Biểu thức toán học:

JSX:

{% highlight react rouge%}
const a = 2;
const b = 2;
const c = <h1>Sum: {a + b}</h1>;
{% endhighlight %}

Javascript:

{% highlight javascript rouge%}
const a = 2;
const b = 2;
const c = /*#__PURE__*/ React.createElement("h1", null, "Sum: ", a + b);
{% endhighlight %}

### 3. Trong một method

{% highlight react rouge%}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
{% endhighlight %}

Ở đây ta sẽ nhận được element có giá trị là: 

{% highlight react rouge%}
<h1> Hello, Harper Perez </h1>
{% endhighlight %}



Mình tạm kết ở đây, Bye.