const dummyBlogData = [
  {
    title: 'this is a title',
    date: '2017-09-10',
    author: 'Mick Peslo',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nisl, dignissim ut finibus porta, eleifend eu nibh. In dictum est arcu, vel finibus massa fermentum hendrerit. Aliquam et hendrerit mi. Vestibulum consectetur risus et finibus sagittis. Morbi sit amet orci id sem laoreet imperdiet nec non nisi. Ut eleifend, quam eu pellentesque egestas, nisl tortor ullamcorper orci, nec ullamcorper eros sapien ac libero. Donec condimentum mi eget dui dapibus, vel egestas eros accumsan. Nunc et lacinia nulla. Cras eget pretium erat. Sed accumsan ut libero viverra pretium. Integer eget ornare risus. Vestibulum vitae risus vitae turpis iaculis tincidunt. Quisque aliquam libero ut massa ultrices, non efficitur arcu pellentesque.
      Duis gravida dolor enim, sit amet pulvinar nulla vehicula ut. Fusce eu blandit leo, quis maximus justo. Vivamus sed ex maximus, efficitur diam eget, fringilla orci. Ut dictum at sapien vitae imperdiet. Cras metus leo, sollicitudin at tristique non, volutpat ac mi. In pharetra sagittis risus nec mollis. Nulla ornare dui sapien, nec fringilla sem laoreet a. Etiam molestie sem mi, sed ornare enim mattis quis. Mauris ac quam urna. Sed luctus lorem a velit vulputate, a molestie libero pulvinar. Proin at tellus ultricies, accumsan neque nec, aliquam est. Aenean tristique at velit ac pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Cras ultricies mattis magna eget facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum ex elit, ac porta nisl porttitor non. Nam accumsan elit ullamcorper dignissim imperdiet. Donec venenatis lacus ac ex aliquet varius. Nunc dignissim diam in egestas egestas. Aenean porttitor est tellus, non vestibulum tortor aliquam at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In a feugiat ex. Donec laoreet pulvinar nisl a efficitur. Etiam tempor leo ac lacinia dictum. Nulla felis dui, vestibulum ut condimentum at, malesuada nec libero. Proin congue nisi vitae turpis imperdiet, sed pharetra massa vestibulum. Phasellus non arcu at sem lacinia sodales in feugiat justo. Praesent vel aliquam sapien.
      Ut rhoncus libero nisl, vel varius lectus tincidunt aliquam. Vestibulum eget tempor lacus, eu congue leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut neque ligula. Etiam vulputate, lorem eu dignissim blandit, purus ante posuere neque, vel finibus est dolor a est. Sed pellentesque diam vel aliquet dictum. Morbi quis nibh in ipsum elementum varius. Pellentesque sit amet nisi at arcu suscipit gravida.
      Donec eu velit eget ligula gravida venenatis lacinia in felis. Aenean volutpat, erat ut facilisis pellentesque, nulla metus varius sapien, eu euismod erat quam eu elit. Quisque lectus massa, blandit nec porttitor sit amet, porttitor sed enim. Quisque sollicitudin, mauris non semper convallis, lorem mauris lacinia metus, in finibus mauris nibh quis justo. Proin faucibus porttitor sem maximus dignissim. Etiam at ante ac orci sodales hendrerit quis nec mi. Fusce accumsan, odio nec pharetra bibendum, diam dolor facilisis eros, ac aliquet ex nunc at leo. Quisque tempus, felis ac varius varius, orci massa varius quam, quis dapibus massa felis vitae enim. Praesent vestibulum, lacus nec laoreet pretium, augue lorem feugiat mauris, at cursus neque nunc eu risus. Pellentesque hendrerit diam vel fermentum luctus. Proin aliquam pulvinar purus ut imperdiet. Pellentesque in velit sapien. Curabitur nulla augue, malesuada ut justo eget, congue mollis ipsum. Proin feugiat rutrum neque, non bibendum ligula commodo eu. Cras molestie dictum ex. Integer nec nulla vel nisi dignissim egestas ut ac elit.`
  },
  {
    title: 'hello, there!',
    date: '2017-09-08',
    author: 'Alice Cooper',
    body: `Pellentesque dictum volutpat orci, a blandit tellus tincidunt id. Maecenas sit amet odio feugiat, maximus mauris quis, vestibulum lacus. Vestibulum ut diam nec nisl molestie rhoncus eu a dolor. Ut sit amet odio convallis, dictum urna at, sollicitudin justo. Aliquam venenatis dolor a lacus suscipit vestibulum. Nullam laoreet augue ipsum, vel vulputate ante finibus vitae. In commodo, elit ac condimentum fermentum, nibh justo placerat purus, cursus faucibus tellus tortor nec lorem. Ut est ipsum, dapibus tempor sapien eu, dapibus congue justo. Duis condimentum facilisis pretium.
    
    Etiam non dignissim dolor. Vivamus non nulla vitae dolor sagittis egestas ut eget leo. Aliquam at ex luctus mi posuere sodales sed at ex. Pellentesque orci ante, posuere ac laoreet nec, blandit vitae quam. Vestibulum sit amet quam magna. Nulla ac pharetra sapien. Quisque fermentum consequat neque non condimentum. Nullam scelerisque dictum tincidunt. Quisque ultricies lacinia odio, nec volutpat nisi. Nam gravida ante mauris, non luctus est semper quis. Mauris ut bibendum justo, id luctus sem. Mauris imperdiet congue interdum. Nam non dictum diam. Proin vehicula tempus semper.
    
    Praesent ac tempus lectus. Duis aliquet massa vitae accumsan varius. Proin venenatis sollicitudin ligula vel iaculis. Nunc euismod non nisi sed aliquet. Pellentesque sit amet magna quam. Aenean efficitur at magna nec commodo. Donec id quam eu diam vulputate malesuada vestibulum eget massa. Duis imperdiet dolor et leo pellentesque varius.
    
    Morbi non quam at sapien aliquet tincidunt. Pellentesque tellus sapien, maximus ut nisi sit amet, porttitor vehicula metus. Etiam quis diam et ligula volutpat pharetra quis nec risus. Quisque nec dolor tellus. Duis venenatis quis mauris id feugiat. Etiam condimentum magna augue, vitae lobortis diam iaculis nec. Suspendisse diam purus, pellentesque quis metus in, suscipit ultricies velit. Donec quis risus faucibus, malesuada odio eget, semper nulla. Morbi at imperdiet orci, at dapibus enim. Mauris id turpis laoreet, vehicula nunc vitae, interdum elit.`
  }
];

export function getBlogPosts() {
  return dispatch => {
    dispatch({
      type: 'GET_BLOG_POSTS',
      data: dummyBlogData
    });
  }
}