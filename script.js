// script.js
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const month = today.getMonth() + 1; // 月は0から始まるので1を足す
    const day = today.getDate();

    // 記事コンテンツの辞書
    const blogPosts = {
        "10-17": "<h2>トップが魅力的なら売り上げはあがるんだよ</h2><p>　トップは誰よりステキで、輝いていないとね。まわりがついてこないんだよ。<br>　「銀座まるかん」の売り上げが下がったら、私がステキじゃないってこと。この本が売れなかったら、この本の編集長が魅力がないの。<br>　「うちの社員がだらしなくて、売り上げが伸びない」って言っている部長さん。あなたがきちんとしないから、業績が上がらないんです。</p><h2>「お金さん、ありがとう」って感謝することだよ。<br>また帰ってきてくれるからね。</h2><p>　お金を払うとき、「お金さん、ありがとう」って言ってみてください。「またひと働きしてくれるんだね。よろしく。ありがとう」ってね<br>　実はね、お金に感謝していると、お金はお金を愛してくれている人のところへ戻ってきてくれるんです。<br>　だから、お金に「好き」と言ってあげることも大事。お金を好きなのは、卑しいことではないですよ。<br>　私は実際にはしていないけど、お金に罪悪感のある人には、特におすすめです。</p>",
        "10-18": "<h2>うまくいかなかったら別の手を出してごらん。<br>あの手、この手って千の手があるよ</h2><p>　千手観音って知ってますか？たくさんの手のついた観音様です。<br>　きっとね、「人生、幸せに生きるためにあの手、この手って、千の手があるよ」って教えてくれてるんだよね。<br>　うまくいかないときは、今の手じゃない、別の手を出してごらん。<br>　それがダメなら、次の手を出す。出し続けることが大事なんです。</p><h2>「やってみよう」と挑戦した数だけ上手になる</h2><p>　人前でスピーチしたり、歌を歌うのって恥ずかしいものだよね。<br>　でも、「うまくできないから」「才能がないから」とか言い訳している人は、本当はできないワケではないのです。挑戦する前からあきらめている。<br>　とにかくやってみること。うまくいかない部分は改善し、また挑戦。さらに、改善していけばいい。やればやるほど、不思議な勢いがついて、ドンドン上達していくものです。</p>",
    };

    // 今日の日付に対応するキー
    const key = `${month}-${day}`;

    // 記事を取得して表示する
    const blogPostContainer = document.getElementById("blog-post");
    if (blogPosts[key]) {
        blogPostContainer.innerHTML = blogPosts[key];
    } else {
        blogPostContainer.innerHTML =
            "<h2>今日の記事</h2><p>今日は特に何もない普通の日です。ゆっくり休みましょう。</p>";
    }
});
