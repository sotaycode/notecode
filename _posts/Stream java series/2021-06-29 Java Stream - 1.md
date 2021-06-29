# Java Stream series - 1

## Stream ?

**Stream** dịch sang tiếng việc nghĩa dòng nước, dòng chảy. Ở trong ngôn ngữ lập trình Java bạn cũng có thể hình dung nó như vậy, một dòng chảy dữ liệu, từng phần tử đối tượng (Object) chạy nối nhau. Cụm từ **Stream** đã từng xuất hiện trên những Class thuộc package `java.io` ở những version trước, nhưng Class đó hỗ trợ cho việc đọc và ghi dữ liệu vào các file(txt, csv, doc, docx...).

Tại phiênn bản JDK 1.8 trở đi **Stream** đã được hỗ trợ cho các đối tượng danh sách (List, ArrayList), và được đặt trong package `java.util.stream`

> A sequence of elements supporting sequential and parallel aggregate operations. (Một hàng đợi của những phần từ hỗ trợ xử lý tuần tự và song song với những phép toán kết hợp).

**Stream** kết hợp giữa những phương thức có sẵn với những Lambda Expression sẽ làm cho code được trong sáng và tinh gọn hơn.

## Bài toán

Giả sử ta có một bài toàn đếm số ký tự '1' và '0' trong một dẫy nhị phân, ở đây ta sẽ xử lý theo cách thông thường vớ sử dụng **Stream**

- Xử lý thông thường:

```java
long[] countBinary(String bi) {
    int countZero = 0, countOne = 0;
    for (int i=0; i<bi.length(); i++) {
        if (i.charAt(i) == '0') countZero += 1;
        if (i.charAt(i) == '1') countOne += 1;
    }
    return new long[]{countZero, countOne};
}
```

- Xử lý bằng Stream:

```java
long[] countBinary(String bi) {
    long countZero = bi.chars().filter(h -> h == '0').count();
    long countOne = bi.chars().filter(h -> h == '1').count();
    return new long[]{countZero, countOne};
}
```

Ở đây ta thấy stream gọn gàn hơn, `chars()` làm một method có sẵng trong String tại JDK 1.8, giá trì trả về `chars()` là `IntStream` một Class thuộc họ **Stream**. `IntStream` hỗ trợ dữ liệu Integer tương `DoubleStream` cho Double, `LongStream` cho Long nhưng không hỗ trợ cho Float (1.8).

Chung ta có hàm `filter` phía trong nó là một Lambda Expression dùng để so sách phần tử tìm kiếm.

Như các bạn có thể thấy xử lý Stream trên có một điểm yếu là ta chỉ có thể tình kiếm giá trị duy nhất là thực hiện tính toán trên giá trị đó, thành ra ta phải thực hiện hai lần. Sẽ ảnh hưởng đến tốc độ xử lý nếu giá trị binary truyền vào quá lớn.

Mình sẽ đi sâu vào cách dùng phương thức hay những xứ lý song song của **Stream**.

Cảm ơn đã đọc qua Note của mình.

Thank you!