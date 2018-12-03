require 'fastimage'

# Custom plugin to get an array of reference images
Jekyll::Hooks.register :site, :post_read do |site|
  images = Dir.chdir(site.source) do
    Dir.glob(File.join('img', 'references', '*.jpg')).sort
  end.map.with_index do |image, index|
    width, height = FastImage.size(File.join(site.source, image))

    {
      'index' => index,
      'src' => image,
      'width' => width,
      'height' => height
    }
  end

  site.data['references'] = images
end
