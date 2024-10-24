// script.js
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const month = today.getMonth() + 1; // 月は0から始まるので1を足す
    const day = today.getDate();

    // 記事コンテンツの辞書
    const blogPosts = {
 //10月の記事        
"10-17": "<h2>トップが魅力的なら売り上げはあがるんだよ</h2><p>　トップは誰よりステキで、輝いていないとね。まわりがついてこないんだよ。<br>　「銀座まるかん」の売り上げが下がったら、私がステキじゃないってこと。この本が売れなかったら、この本の編集長が魅力がないの。<br>　「うちの社員がだらしなくて、売り上げが伸びない」って言っている部長さん。あなたがきちんとしないから、業績が上がらないんです。</p><h2>「お金さん、ありがとう」って感謝することだよ。<br>また帰ってきてくれるからね。</h2><p>　お金を払うとき、「お金さん、ありがとう」って言ってみてください。「またひと働きしてくれるんだね。よろしく。ありがとう」ってね<br>　実はね、お金に感謝していると、お金はお金を愛してくれている人のところへ戻ってきてくれるんです。<br>　だから、お金に「好き」と言ってあげることも大事。お金を好きなのは、卑しいことではないですよ。<br>　私は実際にはしていないけど、お金に罪悪感のある人には、特におすすめです。</p>",
"10-18": "<h2>うまくいかなかったら別の手を出してごらん。<br>あの手、この手って千の手があるよ</h2><p>　千手観音って知ってますか？たくさんの手のついた観音様です。<br>　きっとね、「人生、幸せに生きるためにあの手、この手って、千の手があるよ」って教えてくれてるんだよね。<br>　うまくいかないときは、今の手じゃない、別の手を出してごらん。<br>　それがダメなら、次の手を出す。出し続けることが大事なんです。</p><h2>「やってみよう」と挑戦した数だけ上手になる</h2><p>　人前でスピーチしたり、歌を歌うのって恥ずかしいものだよね。<br>　でも、「うまくできないから」「才能がないから」とか言い訳している人は、本当はできないワケではないのです。挑戦する前からあきらめている。<br>　とにかくやってみること。うまくいかない部分は改善し、また挑戦。さらに、改善していけばいい。やればやるほど、不思議な勢いがついて、ドンドン上達していくものです。</p>",
"10-22":"<h2>地を出して好かれる人間になるためにオレたち生まれてきているんだよ。</h2><p>地を出して嫌われるなら、自分を変えるときかもしれない。人間の目標って、地を出して好かれることなんだよね。一人さんはね、今日も明日も、地を出して一生懸命しゃべってさ、それでも「一人さんの話が聞きたい」って言われることが目標なんです。自由で、楽しくて、人に愛される・・・最高の生き方だよね。</p><h2></h2><p></p>",
"10-23":"<h2>輝ける満点の星　青き海原　咲きほこる花たち　いま神の愛に　感謝します</h2><p></p><h2></h2><p></p>",
"10-24":"<h2>人間関係の修行の中で最大の修行が「結婚」です。</h2><p>結婚がなぜ「修行」かというと、夫婦って世界で一番相性が悪い者同士が好き合って、ひとつ屋根の下で暮らすからなんです。この修行を乗り越えるためには、「相手に期待しないこと」「相手を変えようとしないこと」。このふたつしかないんです。つまり、人は人を変えることはできないということです。それをわかって結婚すれば、相手に対してやきもち焼いたり、イライラしたりすることはありません。まずは、あなたが幸せでいること。そうすれば、ずっと幸せでいられますよ。</p><h2></h2><p></p>",
"10-25":"<h2>愛は与えても減らないよ</h2><p>知恵のある人は知恵を、愛がある人は愛を、自分のあるものを分けてあげることだよね。もちろん、自分を犠牲にする必要はない。自分ができる範囲でいいんだよ。自分がしてあげることは、出し惜しみせずに人に与えていくことです。愛とか、やさしい言葉とか、笑顔とか、与えてもなくならないものを出し惜しみしていると、幸せから遠ざかってしまうよ。</p><h2></h2><p></p>",
"10-26":"<h2>華やかな色を身に着けていれば、いつのまにかいい方向に向かうもの。外見を変えるだけで人生は変わるよ。</h2><p>いつもくすんだ色の服を着ていると、くすんだ人生になってしまうよ。雑巾のような色の服を着ていると、雑巾のような人生になってしまう。色っていうのは、その人の今の姿をわかりやすく示しているのです。もっと前向きに、もっと楽しく生きたいと思うなら、ピンクとか、赤とか、オレンジとか、明るく華やかな服を着てみること。この明るい服を着て、「幸せだな」「ツイてるな」って言葉に出して言ってみてください。あなたの行動がガラッと変わってくるはず。外見は人生を変えてしまう力があるんです。</p><h2></h2><p></p>",
"10-27":"<h2>「私の周りには、いい人しかいない」って言ってごらん。イヤな人や困った人は、いなくなっちゃうから。</h2><p>苦手yな人やイヤな人、困った人って、どの場所にもいるものです。その人達のグチを、あなたは友達に言いたくなるでしょう。ところが、それをやっていると、イヤな人はいつまでもあなたの周りにいついちゃう。だからさ「私の周りには良い人しかいない」って言うんだよ。するとね、イヤな人や困った人は、いつの間にかいなくなっちゃうの。本当にいい人しかいなくなるから。これこそ、言霊の魔法なんです。だまされたと思って、今日からやってみてください。</p><h2></h2><p></p>",
"10-28":"<h2>仕事に打ち込んでる男は間違いなくモテる</h2><p>仕事のできる男は、魅力的です。だから、モテたいなら、仕事に熱中することだよ。いい仕事をしていれば、それを見ている女性がいるものです。女性を追いかけることに力を注いでも、嫌われるだけ。女性に積極的になるより先に、まずは仕事に積極的になろうよ。仕事で自信を得た男は、間違いなくモテるんです。</p><h2></h2><p></p>",
"10-29":"<h2>心配する気持ちがあるときは「ツイてる、ツイてる」と言って心配事をつぶしちゃえばいい。</h2><p>「心配」って「恐れ」から生まれるんです。恐れが出てきたら、恐れを生み出すすべてのものをつぶしちゃえばいい。「つぶす方法」を教えてあげましょう。「恐れ」が出てきたら「ツイてる、ツイてる」って言うんです。おまじないのようにね。劣等感が出てきたら、「自分はよくやってるな」「私ってスゴイな」って言っちゃうんです。言葉のマジックで、心配事は消えて、言葉通りの、”ツイてるあなた”になりますよ。</p><h2></h2><p></p>",
"10-30":"<h2>死ぬのは寿命が来たとき。だから、寿命が来るまでは死なない。</h2><p>戦場に行って、同じように戦っても、弾が当たる人もいれば、当たらない人もいる。交通事故に遭っても、亡くなる人もいれば、傷ひとつなく助かる人もいる。弾が当たって亡くなったら、それが寿命なんです。そして、寿命が来るまでは死なないんです。危険なところに行ったから死ぬわけじゃない。車に乗ったから死ぬわけではないんです。死ぬのは寿命が来たときだけ。生命の問題はそうやって考えると、わかってくる。そして、一日一日が大事なこともわかるんです。</p><h2></h2><p></p>",
"10-31":"<h2>ちょっと「ダメなところ」があるほうが魅力的で、多くの人から愛されるよ。みんな完璧じゃないんだ。</h2><p>人はみんな、完璧じゃないんだよね。だから、ちょっとダメなところがあっていいの。むしろあったほうが、人から愛されるんです。男の人なら「オレは女が好きだ」と公言したり、ちょっとおもしろい話をしてみたり。女の人なら、苦手なことを隠さず話したり、失敗談を明るく告白したり。自分のダメな部分を面白く話せるようになると、ますます人から好かれて、応援されるようになるんです。</p><h2></h2><p></p>",
 //11月の記事
"11-1":"<h2>「自分をゆるします」と言ってみてください。人をゆるせるようになるから。</h2><p>自分をゆるせない人なんか、この世にいないと思っていませんか？実は、多くの人が、自分をゆるせなくて苦しんでいるんです。「人にほめられて喜べない自分がゆるせない」「とがめられて反論できない自分がゆるせない」「大好きな人に好きだと言えない自分がゆるせない」。まずは、だませれたと思って、「自分をゆるします」って言ってください。何回も何十回も、何百回も自分がゆるせるまで、言ってみること。そうすると、個々のコリがポロッと取れてしまいます。自分がゆるせるようになるとね、他人だって簡単にゆるせるようになりますよ。</p>",
"11-2":"<h2>幸せなことを考えている人には、さらに幸せが与えられて。不幸なことを考えている人は些細な幸せすら奪われる</h2><p>人間、幸せなことを考えていると、幸せそうな顔になって、幸せなことを言うの。それがまた、神様が幸せをくれちゃうから、さらに、幸せになっちゃうの。これが「引き寄せの法則」なんだよね。</p>",
"11-3":"<h2>「誰もわかってくれなくていいオレひとりでもやる」とがんばる人は振り返ると大勢の人がついてくる。</h2><p>誰もあてにしないで、ひとりでがんばるって、カッコいいよ。いいことなら、応援してくれたり、援助してくれたり、味方も増えてくるよ。だけどさ、振り返って誰ひとりついてこなかったら、それは間違っているということ。ただのひとりよがりだよ。</p>",
"11-4":"<h2>「人生の岐路」とはあなたが出会うすべての人のこと。</h2><p>学校を選ぶとき、就職を決めるとき、結婚を決意したとき、みんなそれを「人生の岐路」と言います。でも、これは「人生の岐路」じゃないよ。みんな勘違いしている。本当の「人生の岐路」は、毎日毎日あなたが出会う人なんです。だから出会う人には、やさしい笑顔、愛のある言葉を話すんです。そして、出会う人に感謝して、「ツイてる」って言い続けることです。あなたがツイてる波動になれば、何もかもうまくいきますよ。</p>",
"11-5":"<h2>お金は「大事にする」から集まるの。家族や友達といっしょなんだよ。</h2><p>お金って、少し大きなお金を持っているだけで、安心したり、ゆとりが生まれたりするもの。100万円とか貯まったら、なんか落ち着くでしょ。だから、「お金は大切だな」って思うこと。そして愛してあげて大事にすることなんです。お金を大事にすると、「この人、わたしを大事にしてくれるよ」って、仲間を呼んできてくれる。お金はお金を呼ぶんです。だけど、お金はね、車で言うところのガソリンみたいなもの。ガソリンだけあっても車は動かない。ハンドルもタイヤも必要だよね。だから、家族や友達も大事にしないといけない。お金だけが大事なものではないよね。大事なものにたくさん囲まれている人が、結局は幸せなんです。</p>",
"11-6":"<h2>神様は乗り越えられないような問題をあなたに絶対に出さないよ。</h2><p>いろんな難題があなたにやってくるかもしれない。だけど、神様はあなたに乗り越えられないような問題を突きつけたりしない。必ず、解決できるようになっています。笑顔で進むことだよ。そして、周りの人が笑顔になるような働きをすること。そんな、いい行動をしていれば、いつの間にか問題は解決しているから。</p>",
"11-7":"<h2>「守って守られて」がお互いのプライド</h2><p>私は愛弟子を全力で守るよ。だけど、愛弟子たちにも一人さんのことを守ってほしい。そして、彼らはしっかり守ってくれているよ。片方だけが守ってもらえるような、そういう関係は長続きしないんだよ。人間というのは、同じ存在、平等なんです。それが、お互いのプライド。お互い「守っていこう」という気持ちがなかったら、信頼関係は築けないものなんです。</p>",
"11-8":"<h2>★Celebratoin KJ Three months★</h2><h2></h2>",
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
