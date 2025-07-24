var posts=["2024/10/04/接收NOAA19卫星APT信号/","2019/04/21/hello-world/","2023/06/01/anzhiyu主题标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };