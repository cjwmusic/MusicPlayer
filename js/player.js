/**
 * Created by wukong on 16/7/18.
 */

var myAudio = $("audio")[0];

$('.btn-next').click(function () {
    console.log('点击了下一首的按钮');
    getMusic();
});

/**
 * 从网络获取音乐资源
 */
function getMusic() {
    $.ajax({
        url : 'http://api.jirengu.com/fm/getSong.php',
        dataType : 'json',
        data : {
            'channel' : 1
        },
        success:function (ret) {
            var resource = ret.song[0],
                title = resource.title,
                bgPic = resource.picture,
                author = resource.artist,
                audioUrl = resource.url;

            console.log('歌曲名称' + title + '\n' + '歌手:' + author + '\n' + '封面:' + bgPic + '链接:' + audioUrl);

            $('audio').attr('src', audioUrl);
            $('.music-name').text(title);
            $('.singer-name').text(author);
            $('.background').css({
                'background' : 'url('+bgPic+')',
                'background-repeat' : 'no-repeat',
                'background-position' : 'center',
                'background-size' : 'cover',
                'width' : '100%',
                'height' : '230px',
                'position' : "relative",
                'text-align' : 'center'
            });

            myAudio.play();
        }
    })
}

$(document).ready(getMusic())