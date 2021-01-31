---
layout: post
title:  "Spring Batch - Series - 1"
date:   2021-01-31 05:20:20
categories: Cron Jobs - 1 Giới thiệu cron trong Spring.
---

# Cron Jobs.

### Cron job.

Cron job là một tính năng giúp lập lịch (thời gian, lịch biểu) để thực thi những mã lệnh hoặc nhưng công việc ở server.

Ví dụ: các công việc tư động hoá:

- Tự động Backup dữ liệu, các thao tác DML,...
- Gửi và thông báo email.
- Thực thi một lênh, script,..
- ...

Các cách cài đặt:

- Thiết lập thông qua script.
- Cài đặt thông qua Control Panel (cPanel).
- Thiết lập trong cở sở dữ liệu (Database).

Đối với Spring Framework:

- Thiết lập qua file properties,
- Sử dụng @Scheduled.

Ở bài này mình chỉ giới thiệu qua các thành phần của cron trong Spring.

### Thành phần Cron.

{% highlight bash rouge%}
+-------------------- second (0 - 59)
| +------------------ minute (0 - 59)
| | | +-------------- hour (0 - 23)
| | | | +------------ day of month (1-31)
| | | | | +---------- month (1 - 12)
| | | | | | +-------- day of week (MON - SUN)
* * * * * *
{% endhighlight %}

> Khác với cron trong linux, cron trong Spring hỗ trợ tới đơn vị second. 

Do đó chúng ta có thể thiết lập được các công việc theo chu kỳ ở đơn vị second.

##### Ví dụ:

```
0 11 * * * * * 
```

**At 11:00 am every day**

Truy cập vào đây: [Tool cron](https://sotaycode.github.io/cron.sample) để tham khảo cách chuyển đổi của cron job trong Spring (công cụ chưa hoàn chỉnh, mình sẽ thực hiện chỉnh sửa và cập nhật).