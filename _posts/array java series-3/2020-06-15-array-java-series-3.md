---
layout: post
title:  "Array Java series 3"
date:   2020-06-15 09:29:20
categories: array java series-3 Lỗi gặp phải trong mảng.
---

### Ở đâu mình giới thiệu 2 lỗi mình gặp trong lúc sử dụng mảng trong java.

### 1. Truy cập phần tử nằm ngoài độ rộng của mảng.

Tạo mảng 4 phần tử:

{% highlight java rouge%}
int[] arr = {1,2,3,4};
{% endhighlight %}

Thực hiện truy cập phần tử:
{% highlight java rouge%}
System.out.print(arr[1]); // in ra 2
System.out.print(arr[3]); // in ra 4
{% endhighlight %}

Trường hợp truy cập vào phần tử vị trí thứ 4:
{% highlight java rouge%}
System.out.print(arr[4]); 
{% endhighlight %}

Thông báo lỗi:
{% highlight java rouge%}
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 4
{% endhighlight %}

Trường hợp truy cập vào phần tử vị trí thứ -1:
{% highlight java rouge%}
System.out.print(arr[-1]); 
{% endhighlight %}

Thông báo lỗi:
{% highlight java rouge%}
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: -1
{% endhighlight %}

Vd: Sau đây là ví dụ về duyệt một mảng tìm phần tử lớn nhất (MAX)
{% highlight java rouge%}
int []a = {5,6,3,2,3}; // mảng có 5 phần tử.
int MAX = a[0];
for (int i=0; i<6; i++) {
  System.out.print(a[i]);
}
{% endhighlight %}

Thông báo lỗi:
{% highlight java rouge%}
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
{% endhighlight %}

Bởi vì không tồn tại phần tử thứ 5 trong mảng.

Để xác định số lượng phần tử thì thực hiện:
{% highlight java rouge%}
System.out.print(a.length); 
{% endhighlight %}

Chỉnh sửa code:
{% highlight java rouge%}
int []a = {5,6,3,2,3}; // mảng có 5 phần tử.
int MAX = a[0];
for (int i=0; i<a.length; i++) {
  System.out.print(a[i]);
}
{% endhighlight %}

### 2. Truy cập vào phần tử chưa được tạo.

Khởi tạo mảng:

{% highlight java rouge%}
String[] st = new String[4];
st[0] = "A";
st[1] = "B";
st[3] = "D";
{% endhighlight %}

Truy cập cào phần tử vị trí số 3;
{% highlight java rouge%}
System.out.print(st[2]);
{% endhighlight %}

Kết quả:
{% highlight java rouge%}
null
{% endhighlight %}