hexo.extend.filter.register('after_post_render', function(data) {
    data.content = data.content.replace(/<img(.*?)>/g, function(img) {
      if (img.indexOf('loading=') === -1) {
        img = img.replace('<img', '<img class="article-img" loading="lazy"');
      }
      return img;
    });
    return data;
  });