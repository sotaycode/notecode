---
layout: post
title:  "2021-02-11-New project và set domain-Note 3"
date:   2021-02-11 12:07:20
categories: New project và set domain.
---

# New project và set domain

### New project

Để khởi tạo một dự án Laravel mới ta có thể thông qua 2 cách:

- Laravel Installer
- Composer

#### Laravel Installer

Tải laravel install thông qua composer:
- Cài đặt version mới nhất:

{% highlight php rouge%}
composer global require "laravel/installer"
{% endhighlight %}

- Chỉ định version mong muốn:
{% highlight php rouge%}
composer global require "laravel/installer=^4.1"
{% endhighlight %}


Tạo dự án:

{% highlight php rouge%}
laravel new your-project-name
{% endhighlight %}

#### Composer

{% highlight php rouge%}
composer create-project laravel/laravel your-project-name
{% endhighlight %}

- your-project-name: thay thế thành tên dự án của bạn.

##### Cấu trúc thư mục:

![structure](https://i.imgur.com/Gyz8zCc.png)

##### Start project:

- Sử dụng câu lệnh dưới:

{% highlight php rouge%}
php artisan serve
{% endhighlight %}

- Add vào thư mục htdocs của xampp:

![xampp](https://i.imgur.com/SaQoyJ9.png)

copy dự án vừa tạo mới phía trên vào thư mục:

{% highlight rouge%}
\xampp\htdocs
{% endhighlight %}

Truy cập vào url: 

{% highlight php rouge%}
http://localhost/laravel/public/
{% endhighlight %}

###### Thành công:

![image-20210211145130588](https://cdn.auth0.com/blog/whats-new-laravel-8/laravel-jetstream-livewire.png)

### Set domain

Ở đây mình chỉ giới thiệu ở trên hệ điều hành windown 10.

Tại file:

{% highlight http rouge%}
C:\Windows\System32\drivers\host
{% endhighlight %}

Add thêm **127.0.0.1 dev.laravel** 

{% highlight shell rouge%}
# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
127.0.0.1 dev.laravel
{% endhighlight %}

Bây giờ ta có thể truy cập website bằng url sau:

{% highlight http rouge%}
http://dev.laravel/
{% endhighlight %}

