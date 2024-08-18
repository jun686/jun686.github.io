var posts=["2023/06/01/anzhiyu主题标签/","2019/04/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };