# link
> 通过 <a> 标签包裹元素

> eg
```
import { Link } from "react-router-dom";
...

function (){
  ...
  return (
     return (
    <Link to={`detail/${id}`}>
      {size == "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  );
  )
}
```

# 原理
> a + router