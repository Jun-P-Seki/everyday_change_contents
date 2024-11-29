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
"10-26":"<h3>HAPPY BIRTHDAY MOTOKO</h3><h2>華やかな色を身に着けていれば、いつのまにかいい方向に向かうもの。外見を変えるだけで人生は変わるよ。</h2><p>いつもくすんだ色の服を着ていると、くすんだ人生になってしまうよ。雑巾のような色の服を着ていると、雑巾のような人生になってしまう。色っていうのは、その人の今の姿をわかりやすく示しているのです。もっと前向きに、もっと楽しく生きたいと思うなら、ピンクとか、赤とか、オレンジとか、明るく華やかな服を着てみること。この明るい服を着て、「幸せだな」「ツイてるな」って言葉に出して言ってみてください。あなたの行動がガラッと変わってくるはず。外見は人生を変えてしまう力があるんです。</p><h2></h2><p></p>",
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
"11-8":"<h2>★Celebratoin KJ Three months★</h2><h2>「みんなと同じ人」なんていない。</h2><p>人って全員が違うんです。違うのがあたりまえ。目の形から、足の形まで、同じ人間なんてひとりもいないの。生まれた場所、環境、性格、みんな違うんです。だから、周りが白って言うから、自分まで白にしちゃうのは、おかしいことなんだよ。ひとりひとり、違う色がある。1億2千万人がいたら、1億2千通りの道があるんです。あなたは他の人と同じではない。神が創った「絶対なる存在」なんです。だから、迷わず進んでください。みんなができないから、自分もできないなんて言ってたら、世の中何もできないからね。自分が正しいと思うことを、楽しくやればいいんです。</p>",
"11-9":"<h2>世間の夢は世間が叶えればいい。自分の夢は、自分で叶える！</h2><p>日本一のお金持ちになりたい、メジャーリーガーになりたい、プライベートジェットがほしい⋯⋯大きな夢を持つことはいいでしょう。でも、その夢は本当に自分が描いた夢なのか？本気で思っているなら、それを目指せばいい。ただ、その夢は世間や親や人の価値観で押し付けられているものではないか？もう一度考えてみてください。夢は小さくても大きくても、どちらでもいいんです。駄菓子屋さんになりたいでも、ベランダのあるマンションに住みたいでも。それに、夢はどんどん変わっていい。何より、「自分が本気で思う夢だ」ということが大切なんです。その思う力が、その人のエネルギーになります。</p>",
"11-10":"<h2>お金は稼ぐ能力より維持する能力のほうが難しい。</h2><p>1億円稼ぐ能力があっても、その1億円を維持できるかどうかは、別な問題です。稼いだ1億円を維持する能力がなければ、だまされて取られてしまうかもしれない。使い切って、10万円さえ残らないかもしれない。稼ぐ能力と、維持する能力とは、全く違うものなんです。稼いだ時は、そのことを覚えておくこと。とくに「うまい話があるから」と近寄ってくる人には注意することだよ。</p>",
"11-11":"<h2>あなたの波動が変わればすべてが変わる</h2><p>自分はダメだ、自分が悪いと、自分で自分を虐待していませんか？あなたのことは、神様が認めているんです。神様が認めているから、この世に生まれてきたの。だから、誰に何を言われようと、関係ない。「私は神様に認められて、生まれてきたんだ。」そう思うことです。そして、心の中をじっと見つめてください。そうすれば、いろんなことを見抜けるようになる。それができれば、あなたから出てくる波動が変わってくるはずです。波動が変われば、すべたがガラッといい方向へ変わります。前の自分とはもう別の人です。</p>",
"11-12":"<h2>神様は私を絶対見捨てない。ありがとう、ありがとう。</h2><p>神様は、絶対にあなたを見捨てることはありません。もし「私には神様なんていない」と感じていたら、あなたが神様を見捨てたときです。つらいことがあったとき、自分が神様を見捨てていないか考えてください。そして気がついたら、「神様は私を絶対に見捨てない。ありがとう。ありがとう」と言ってください。それだけで、神様と仲直りできますよ。</p>",
"11-13":"<h2>第三の目は眉間にある「心の目」。ニコニコしていれば、この目が開いて素晴らしいアイデアが浮かんでくるよ。</h2><p>人は怒ると顔つきが変わるもの。眉間にしわが寄って目と目の間が近づき、口がへの字に曲がるんです。これは、人生を不幸にする顔なのです。眉間の間、つまり額の真ん中には「第三の目」という心の目があり、この目が物事の本質を見抜いてくれるのです。眉間にしわが寄っていると、第三の目が閉じてしまい、幸せになるために必要なものがぜんぜん見えなくなってしまうんだ。いいアイデアも浮かばなくなる。だからこそ、いつもニコニコすることだよ。第三の目がパッと開いて、素晴らしいアイデアや発想がどんどん出てくるからね。</p>",
"11-14":"<h2>いばる人って不機嫌なんです。自分の心が満たされてないから。</h2><p>上司でも、先生でも、いばってる人って、いつでもイライラして不機嫌なんです。自分よりも弱い人にいばることで、その人からエネルギーを奪って、自分の満たされない心を埋めようとしてるんだね。いばってばかりの人は、自分で自分をほめればいいの。今日、自分がやったことを何でもいいからほめればいいんです。「雨なのに、洗濯をして、えらかったね」とか、「満員電車にゆられて会社に行くなんて、スゴい」とかね。さぁ、今日はどんな言葉で自分をほめようかな？</p>",
"11-15":"<h2>「競争で一番」ではなく「いい人」で一番を目指そうよ</h2><p>成功を目指すとき、誰かと競争して一番になる必要はない。人を蹴落としても、恨まれるだけ。今度いつ自分が蹴落とされるか、ビクビクするようになってしまいます。成功するためには、どんな努力が必要か？それは競争ではなく、「人を喜ばせる」努力なんです。たとえば、平社員の中で、上に上がっていく人は、平社員の中で競争をしたいしない。どうやったら、仲間が気持ちよく仕事ができるのか、そして上司が喜ぶかを常に考えて、行動しています。「いい人」になって、会社を盛り上げる人なのです。いい人で一番を目指そう。そう思う人こそ、神様から愛され、成功を手に入れることができるんです。</p>",
"11-16":"<h2>人生は輝ける修行　大地を流れる赤きマグマ　天界の白き光　今、宇宙に向かって七つのチャクラが開く</h2>",
"11-17":"<h2>親だって、兄弟だって、わかりあえなくて、あたりまえ。一番難しい修行の相手だからね。</h2><p>人はね、自分の生まれる環境や状況を選んで生まれてくるんです。もちろん、生まれる前に、両親や兄弟も、自分で選んでくる。そしてね、自分の魂の修行のために、「一番難しい修行ができる相手」を選ぶこともあるんです。苦手でイヤな人、理解できない人を、あえて家族として選ぶんです。つまり、肉親というのは、自分にとって一番むずかしい修行の相手なの。だから、家族でもわかり合えないのは、あたりまえ。そう思ったほうが、ずっとおだやかに親や兄弟、子どもと接することができるんだよ。</p>",
"11-18":"<h2>「上気元」でいると、みんなあなたの味方になってくれる</h2><p>誰もが気元がいい人が好きなんです。気元が悪い人は嫌われるの。単純に「上気元」なほうがいいよということです。</p>",
"11-19":"<h2>どんなときでも相手を肯定してあげる。一人さんのモットーは「自分にやさしく、人にもやさしく」。</h2><p>これをね、やってみるとスゴく幸せだよ。自分にやさしくすると、自分が幸せになれる。人にやさしくすると、他人も幸せになる。愛だね。厳しくすることが、愛だと思ってる人がいるけど、それは違うよ。とくに子どもに厳しくすることで、しつけをしようと思っている親がいる。自分がされてイヤだったことなのに、自分でしてしまうんだね。これを因果が巡るっていうんだよ。自分が人にされてイヤだったことは、決してしてはいけないよ。とにかく誰にでも愛を持って、やさしくすることです。</p>",
"11-20":"<h2>愛に対しては愛で応えるものなんだよ。</h2><p>無償の愛に対しては、無償の愛で応えるものなんです。無償の愛だからって、「返さなくていいんだ」じゃないんだよ。それじゃ、ただのわがままです。たとえば、上司におごってもらったら、「ごちそうさま」ってちゃんとお礼を言う。いい話を聞いたら、「ありがとうございました」って感謝する。こういう”愛”が大事なんです。愛で応えないようになるとさ、だんだん無償の愛を出す人がいなくなっちゃう。この世の中、闇になっちゃうよ。</p>",
"11-21":"<h2>本当にモテる女は明るくて、わがままで派手なブス。</h2><p>美人だからといってモテるワケではないんです。きれい過ぎて、男が近寄りがたいこともあるでしょう。明るくて自信にあふれていれば、ブスでもモテるのです。少しブスのほうが、男も声をかけやすいもの。自分が”ちょっとブスかな？”を思ったら、華やかな色の服を着て、キラキラのアクセサリーを付けてみましょう。そして、堂々と自信を持って振る舞うこと。周りの見方が変わってきますよ。あとは、男性に媚びないこと。男性は母親のように強い女性を求めています。やさしくて女らしいだけではダメ。自分の意見を持っていて、ちょっとわがままなほうがモテるんです。</p>",
"11-22":"<h2>毎日生きていることが魂の修行。ムダなことは何もない。</h2><p>人間は、「魂の修行」のためにこの世に生まれてきました。あなたも、私も、修行するために生きているんです。そう言うと、難しいことのように思えるけど、実にシンプル。だって、生きていれば毎日、いろんなことが起きるでしょ？自転車が壊れたり、財布を落としたり、怪我をしたり。それが「修行」なんです。誰もがいっしょ。一年生きていれば、一年分修行ができるワケです。十年生きていれば、十年分修行ができます。ムダなことは何ひとつないのです。</p>",
"11-23":"<h2>働くとは「はた」が楽すること。今日だけでも「はた」が楽するほど働けたかな？</h2><p></p>",
"11-24":"<h2>知恵で１万円増やせないなら起業はしないことだよ</h2><p>「１万円を好きに使って増やしなさい」と言われたら、あなたはどうやって増やしますか？材料を買ってたこ焼きを売る、得意な踊りを公民館で教える、ミシンを使って洋服をリメイクする⋯⋯自分の特技を活かし、いろんな方法があるはずです。<br>知恵を出して、１万円を２万円、そして３万円と段階を踏んで増やしていく。ひとつひとつ積み重ねて、段階を積むと、金額にふさわしい知恵が湧いてくるものなのです。<br>まず、１万円を活かせるか試してみること。それができなければ、起業はしないほうがいいよ。</p>",
"11-25":"<h2>離婚は困ったことではないよ。「結婚生活、卒業おめでとう」そして、次のステップへ。</h2><p>結婚しても、いっしょにいるのがつらくなったら、わかれたほうがいいよ。我慢なんかしちゃいけない。未だに離婚すると不利だと思う人もいるみたいだけど、今は何の支障もない。離婚は困ったことなんかじゃないんです。<br>人生は１度きりなのだから、新たなステージに向かうべき。新しい旅立ちだと、喜んでいいんです。<br>それに、我慢できなくなるということは、神様が「もう結婚生活は続けなくていいからね。楽になりなさい」と教えてくれている証拠。<br>「卒業、おめでとう！」。さあ、次の道へ進みましょう！</p>",
"11-26":"<h2>遺産なんてもらわなくても生きられる。親からは命をもらっているんだから。</h2><p>親が亡くなって、遺産があったとします。この遺産は、もらえるようなら、もらえばいい。でも、もらえないなら、もらわなくても大丈夫なんです。兄弟で争う必要なんてない。<br>親からは、健康な体、大事な命をもらっているんです。<br>働けれるんだから、それが財産。</p>",
"11-27":"<h2>「上気元」をまいている人間には「上気元な出来事が起こる」。</h2><p>「類友の法則」って言って、人って同じような人に引き寄せられるものなんです。<br>きゅうりの種をまいたら、きゅうりが出るのと同じくらい、幸せをまいたら、幸せが広がっていくの。<br>今日だけでも「上気元」になってみてごらん。<br>まずは、あなたから。<br>「上気元」が引き寄せられるから。</p>",
"11-28":"<h2>人からの頼まれごとは神様の贈り物。運勢がよくなってきた証拠だよ。</h2><p>❝よく頼まれごとをするな❞と思ったら、運勢がよくなってきているということだよ。だから、無理なく、できることなら喜んで引き受けるといい。<br>便利に使われているのではないかと思う人もいるけれど、見方を変えてごらん。気軽に声がかかるということは、素晴らしいことだよね。<br>そして、声がかかることを喜べる人は、豊かで幸せな人生を送ることができるのです。今日は、何か頼まれたら、「はい」と返事をして、笑顔で引き受けてみてください。<br>でもね、もちろんん、やりたくないことは、ちゃんと断っていいんだよ。</p>",
"11-29":"<h2>自分の人生は喜劇と決めている。</h2><p>自分が、自分の人生の脇役になっちゃダメだよ。<br>あなたのは、あなたの人生の主人公なんです。そして、そのドラマの脚本は、自分で決めるんです。<br>私は「自分の人生は喜劇」と決めてるの。だから、面白くてたまらないんです。何が起きても笑えるんだ。だった、私の人生は喜劇だからね。<br>中には、「悲劇」だと決めてきた人もいる。その人の人生は、簡単に変えられるんです。脚本を書き換えればいいだけ。<br>自分の人生ではね、主人公もやるけど、脚本家でもあるから。</p>",
"11-30":"<h2>人間は恥をかきながら向上するもの。恥をかいていいんだよ。</h2><p>恥をかくのは悪いことではないよ。恥ずかしいなと思ったとき、人は次の手を考えて上へ上がっていくのです。<br>わからないことがあったら、知っている人に質問する。「こんなことも知らないのか」って言われるかもしれません。確かに質問すると恥をかくこともありますが、ひとつ利口になるから、それでいいの。<br>恥をかいて覚えたことは、一生忘れません。心にグサッと刻み込まれるから。<br>さぁ、みんなで恥をかきながら、向上していこう。</p>",
//12月の記事
"12-1":"<h2>病気のときはね、「気」を話して「病」だけにしちゃえば、たいがい治るんだよ。</h2><p>病気というのは、身体がなるものであって、心までは病気にならなくていいんだよ。<br>病気だから、暗くなっちゃうとか、ふさぎこんじゃう必要はないんです。心は病気じゃないんだから。<br>本当は身体だけが悪いんだから、心は元気でいたほうがいい。<br>心が元気な人は、治りが早いんだよ。</p>",
"12-2":"<h2>「寒くないかい？」こんなひと言から親切は始まる。</h2><p>人に親切にしたほうがいいというのはわかっているけど、どうやればいいのかわからない人もいるよね。ちょっと勇気はいるけど、小さな声かけから始めてごらん。<br>誰かといっしょにいて、寒そうに手をこすっていたら「寒くないですか？」って声をかけて、暖房の温度を上げる。上着を脱ぎ始めたら「暑いですか？」と窓を開ける。<br>こんな小さな心遣いでいい。相手を気にかけてあげることなんです。<br>自分ができる範囲でいい。いいことを積み重ねていけば、きっと神様は見ていてくれるから。</p>",
"12-3":"<h2>時が来れば誰に言われなくても勝手に学ぶんです。</h2><p>学ぶべきときが来ていない人に、何を言っても聞き入れてはくれないもの。学ぶ時が来れば、自分でペンを持って学ぶんです。試験前じゃないと勉強しない子どものようにね。<br>困っているということは、「学んでいる」ということなのです。人間というのは、困らないと学ばないからね。困ってから学んでも遅くはない。<br>何に困るかはわからないけれど、困った時に学べばそれで間に合います。</p>",
"12-4":"<h2>人間は意志が勝れば運命はどうとでも変わるんだよ。</h2><p>人生は、どんなドラマにするかかかっている。<br>どんな人生か自分で決めるんだ。決めたらね、舵を取るのは、自分だよ。自分が望む場所へ船が向かうようになっているんです。<br>しっかい舵をとれば、ハワイだって、南極だって、どこだって行けちゃう。だけど、舵がないと、ただ漂って、さまようだけ。<br>この舵は、何かというと、「意志」なんです。「意志」が強ければ、運命にも勝てる。じゃぁ、どうすれば強い「意志」が持てるかっていうとね、自分の中に「光」がなきゃダメなの。心の中が曇って、黒いものがあると、運命に負けちゃうんです。</p>",
"12-5":"<h2>元気なら一生働ける。よかった、よかった。</h2><p>「一生働くなんてイヤだ」と思うかもしれませんが、年をとっていくと「一生元気で働けることは素晴らしい」と感じるはずです。<br>健康で、人の役に立って、誰の世話にもならず、お金を稼いで生活する。そして休みには旅行に出かける⋯⋯あたりまえのように思う日常は、実は幸せに満ちたものなのです。<br>仕事がなくて、毎日何もすることのないむなしさや強さは、年をとらないとわからないかもしれません。<br>今、毎日、働けることに感謝する。そして笑顔で働く。<br>それを続けていけば、神様があなたを見守ってくれるはずです。</p>",
"12-6":"<h2>自分があせりそうになったらこう言うの。「ゆっくりゆっくり、お先にどうぞ」。</h2><p>あせっている人に「早く落ち着きなさい」なんて言っても、なかなか冷静になれないものだよ。自分で意識して、動作をゆっくりにするしかないんです。<br>歩くときは、わざとゆっくり足を上げてみる。それで、背筋を伸ばすんです。酸素をいっぱい吸えるようにね。<br>自分があせりそうになったら、大きく呼吸したあと、こう言ってごらん。「ゆっくりゆっくり、お先にどうぞ」ってね。<br>この言葉を口に出すと、気持ちに余裕ができて、リラックスできるから。</p>",
"12-7":"<h2>嫌いな人に会って不気元になるなら、会わないで「上気元」にでいたほうがいい。</h2><p>とにかく気元が悪くなるのはやめてほしい。だって、周りが迷惑だからね。<br>だんなの実家に帰って、姑とうまくいかない話をする人いるよね。悪口を言うくらいなら、実家へ行かないほうがいいの。<br>それを聞かされている人も、イヤになっちゃうんだよ。だから、気元が悪くなるような人に会う必要はないんです。</p>",
"12-8":"<h2>神から与えられたものに文句を言わない。どんなものも上手に活かしていく人は、必ず成功するんです。</h2><p>麻雀をやるとき、自分の持っている手に文句を言っている人は勝った試しがないというけれど、人生でも同じことです。<br>身体が弱いから、学校に行ってないから、家が貧しかったからと、文句を言う人は成功しないんです。<br>神が与えたものすべてをよく捉えて、努力する人には、神様が次のチャンス、次のチャンスと出していくので、必ず成功しちゃうの。<br>間違っていても、間違いに気づいて行動すれば大丈夫。運よく成功するのではないの。必ず成功するんです。</p>",
"12-9":"<h3>LOVE</h3><h2>❝本当の自分❞ってどんな人なんだろう？</h2><p>要は「あなたが思っているあなたは、本当のあなたじゃないよ」って言いたいの。<br>今、幸せならそれでもいいんです。だけど、幸せじゃなかったら「自分が思っている自分」は１０％も合っていないかもしれない。<br>「引っ込み思案」とか「落ちこぼれ」とか、親や先生や友だちに言われて、自分がそう思い込んでいただけなんです。昔を引きずって、自信をなくしてるだけ。<br>あなたは、本当はそのままで大丈夫なんです。</p>",
"12-10":"<h2>人を導いてあげたい、救ってあげたい、と思ったら、汚いカッコしてちゃダメです。地味でもダメ。ステキだなと思われるように華やかにしなきゃ。</h2><p>今はね、「ボロは着ていても心は錦」というのは、流行らない。そういう時代ではないんです。<br>何をするにも、身なりはきちんとしておいたほうがいいよ。<br>特に、人を引っ張っていく人は、みんなが憧れるような格好をして、華やかでいること。見かけって大事なんです。</p>",
"12-11":"<h2>使ってないものは捨てな。迷ったら捨てるんだよ！</h2><p>家の中がゴチャゴチャだと、運気は上がらないよ。<br>だからさ、今日は、家の中の使わないものを捨ててしまおう。<br>「整理してみよう」と思うから、整理できないの。<br>整理しなくていい。迷ったら、捨てるんだよ！</p>",
"12-12":"<h2>人生はね「上、横、下」に行く三つの道しかない。</h2><p>人生、「上、横、下」どこへ行くかはあなた次第。成功する人は、必ず上に上がっていきます。<br>今、どっちの道に進んでいるか、わかる方法を教えましょう。<br>「上に進んでいれば、ワクワクして楽しくなる<br>横に進んでいれば、退屈に感じる<br>下に落ちていると、みじめになる」。<br>成功を目指すなら、上に上がる道を選ばなくちゃいけないよ。</p>",
"12-13":"<h2>愛することは大切だけど愛される人生を送ることが大切だよ。愛される人生を送るには愛されるような行為が必要なんだよ。</h2><p>愛するのは、ストーカーでもできるんです。一番大切なのは、相手から愛されるような人間になること。魅力的な人間になることです。<br>笑顔でいること、悪口を言わずいい言葉を話すこと、周りの人にやさしくすること。そんなあなたに、仲間が集まってくるから。<br>今日から、できることをやってみてごらん。<br>一度にできなくていいんです。ほんのちょっとだけ、勇気を出してやってみることだよ。</p>",
"12-14":"<h2>アドバイスを受け入れる力を磨かないと絶対うまくいかないよ。</h2><p>野球の監督とか、会社の社長とか、指導力で成績が変わるものだよね。指導力の良し悪しは問われるけど、指導される側の力についてはあまり言われません。ところが、指導される側の力が大切なんです。<br>何か注意されたり、アドバイスされたとき、ブスッとしたり、不満顔だったら、指導する側も頭にくる。だから、受ける側はアドバイスを言いやすいようにしてあげるんです。話を聞き入れる姿勢を見せて「教えていただき、ありがとうございます。また、ご指導お願いします」と言ってみてごらん。指導する側の心が軽くなるから。こんな人は、指導者のいい片腕になっていくはずです。</p>",
"12-15":"<h2>自分を「不幸」だと思っている人は人を幸せにはできない。</h2><p>自分すら幸せにできない人が、人を幸せにできないのは、あたりまえだよね。<br>英語を話せない人が、英語を教えられないのと同じこと。<br>まずは、自分が幸せになることですよ。<br>今日から、自分が「幸せ」って思ってみようよ。</p>",
"12-16":"<h2>自分の弱点こそ自分の強みになる</h2><p>自分にとってのコンプレックスや弱点は、実は武器になることを知ってほしい。<br>たとえば、一人さんは病弱だったからこそ、健康に関心を持ち、健康食品の会社を興した。コミュニケーションが苦手で、人の話を聞けるよう心理カウンセラーになった人もいる。うつの苦しみを多くの人と共感したくて、うつの本を書いた人もいる。弱点をうまく利用することだってできるんです。<br>「ピンチはチャンス」ということを忘れないでください。</p>",
"12-17":"<h2>不安に思っている悪いことは、実際の５０分の１しか起きない。</h2><p>世の中には「未来はだんだんよくなる」と思っている人と、「どんどんダメになっていく」と考える人の、２種類がいます。<br>私は「明らかに世の中はよくなっている」って考えます。だって、戦国時代に携帯はなかったし、江戸時代にクーラーはなかったでしょ？<br>こんなにいい時代に生まれたのだから、未来はよくなると考えるべき。<br>いろんなことを不安に思うのは、その人の心の問題なんです。<br>不安に思っていることは５０分の１しか起きないと思ってごらん。不安になる時間を、楽しい時間に使うことができるから。</p>",
"12-18":"<h2>あなたが愛や光を大切にすれば、あなた自身が愛や光に包まれます。</h2><p>自分には「愛」がないと思っている人がいるけど、そんなことはない。誰もが神様の愛と光でできているんです。ただね、そのことに気づいていないだけなのです。<br>もう、気づいたよね。だったら、今、目の前にいる人たちに愛をいっぱい出していこうよ。難しいことではないんです。<br>笑顔で過ごす、愛のある言葉をかける、そして自分だけ機嫌よくいること。こうやって、愛と光をふりまいていけば、あなた自身が愛と光に包まれます。</p>",
"12-19":"<h2>春は若葉のにおいが好き<br>夏はきらめく太陽が好き<br>秋は風に舞う落葉が好き<br>冬は海に降る雪が好き<br>でも、どんなすてきなことより<br>あなたがいちばん好き</h2><p></p>",
"12-20":"<h2>自分のできることでいいんです。人が喜ぶことをやってみな。あとで神様からご褒美をもらえるから。</h2><p>自分の能力や才能を活かして、それを世の中のために役立てることが大事だよ。<br>どうやって、役立てようか、考えるだけでご褒美がくるんです。<br>人のために役立とうと行動なんかしたら大変だよ。大大ご褒美があなたのもとへやってきます。<br>そう思って生きるといいよ。絶対に。</p>",
"12-21":"<h2>「常識にとらわれない」。運勢を上げるなら、常識以上の考えが必要だよ。</h2><p>「自分は普通以上に幸せになりたい、成功したい」と思っているなら、常識的な考え方は手放そうよ。<br>結婚したくないなら、しなくていい。学校へ行きたくなかったら、行かなくていいんです。<br>あなたに向いていないことはしなくていい。<br>あなたにとって、それはいらないこと。そのほうがなぜかうまくいくんです。<br>なぜなら、あなたは「神の子」だから。</p>",
"12-22":"<h2>子どもを叱って反省させちゃいけない。どんどんほめる。親の心もきれいになるんだから。</h2><p>子どもが失敗したり、親の気に入らないことをすると「少しは反省しろ」と言っていませんか？反省などしたら、ますます落ち込んで、失敗を怖がるようになってしまいます。子どもは反省などさせてはダメです。ほめてあげるだけでいいんです。<br>「よくできた」「たいしたもんだ」「今度はもっとうまくいくよ」。こうした言葉を聞いた子どもは、今のままで十分愛されているという安心感を得ることができるんです。<br>それにね、声に出している親の心もきれいになっていくんです。</p>",
"12-23":"<h2>人生が一番変わるのは人に喜ばれることをするとき。</h2><p>「今のままではイヤだ」と自分を変えたいと思うなら、生き方を変えることです。<br>では、どういう生き方をすればいいか？<br>それはね、「人に喜ばれる生き方をすること」です。<br>道端のゴミを拾うとか、バスで席を譲るとか、笑顔であいさつするとか。あなたにできるそんな些細なことでいいんです。<br>人が喜ぶことをすれば、めぐりめぐって、自分のところにもうれしいことが返ってくるからね。</p>",
"12-24":"<h2>ー天国の詩ー<br>こんなにいい所に、ひとりでも多くこれるようにしたいんだ。あなたはそういう人ですね。</h2><p></p>",
"12-25":"<h2>小さな幸せを数えだしたら大きな安心が手に入った。手があって幸せ、足があって幸せ、今日があって幸せ。</h2><p>恋人がいない、お金がない、子どもがいない、車がない⋯⋯自分にないものを数えると、悲しくなる。それって、不幸だよね。<br>でもさ、自分にあるものを数えると、心が豊かになって幸せになります。<br>命があって幸せ、友達がいて幸せ、手があって幸せ、口があって幸せ、ごはんが食べられて幸せ。<br>こんなにいっぱい幸せがある。だから、今日も幸せだね。</p>",
"12-26":"<h2>人間関係がもめるときは必ず家がゴチャゴチャなんだよ。</h2><p>必要のないもの、使わないものから、悪い波動が出ているんです。<br>家の中がもめる、人間関係が悪くなる、いろんなイヤな出来事が起こる⋯⋯こういうときは、家の中を確認してみてください。家に帰るのがイヤだと思うほど、ゴチャゴチャした部屋だから。<br>いらないものは、一刻も早く捨てることだよ。</p>",
"12-27":"<h2>本はね、７回読むと「わかる」が「できる」に変えられるよ。</h2><p>私は、いつも本を何冊も手元に置くほど本好きだけど、一般的には本は読まなくても生きていけるよ。だけど、より楽しく、より充実した時間を過ごしたいなら、読書は必要です。１冊の本からひとつだけでも印象に残ることがあれば、それで十分です。たった１行、たったひと言でも「なるほど」と思うことがあれば、買った価値はあると思うよ。<br>さて、この本を読んで「頭では理解できるけど、実行はできない」っていう人がいるよね。その場合、２回、３回、と繰り返し読んでみてください。何度も読めば、理解度が深まり、腑に落ちてくるはず。<br>そして、７回読めば、「わかる」が「できる」に変わります。</p>",
"12-28":"<h2>「誰かを助けたい」と思ったときに困っている状態から抜けられる。</h2><p>「助けてほしい、助けてほしい」と人を頼るより、こんな些細な自分でも人の役に立てないかと考えたとき、心が豊かになるんだよ。<br>お釈迦様が貧乏な人から先にお布施をもらうように指示したのも、そういうことなんです。どんなにつらい中にあっても、少しでも人の役に立とうとすると、自分まで恵まれるということなんだよね。<br>人のためにがんばることで、自分が困っている状態から、脱出することができるんです。</p>",
"12-29":"<h2>この国は「言霊の国」言葉を味方にするか、敵にするかで人生って、ぜんぜん違ってきます。</h2><p>上気元じゃなくても、「今、上気元だよ」って言葉は言えるよね。<br>自分の心のままに言葉を出してはいけないの。心に任せると、とんでもないことになる。<br>いい言葉、きれいな言葉、前向きな言葉を使う。<br>つまり、言葉で舵をとるんです。言葉通りの方向へ向かうから。</p>",
"12-30":"<h2>自分を愛して他人を愛します<br>優しさと笑顔をたやさず<br>人の悪口は決していいません<br>長所をほめるように努めます</h2><p></p>",
"12-31":"<h2>今日で終わり<br>明日からまた命が始まる</h2><p></p>",
//1月の記事
"1-1":"<h2>今日から一年が始まる。<br>そして、命が始まる。</h2><p></p>",
"1-2":"<h2>今日一日だけ一生懸命生きよう。明日のことは考えないで。</h2><p>まずは、「今日だけ幸せに生きること」を考えよう。<br>いや、「今だけ幸せに生きること」を考えてください。<br>人生って結局、今の連続なんです。<br>今を楽しくすることから始めてみましょう。不安になることは、何ひとつないんです。<br>今、幸せなら、明日も、あさっても幸せですよ。</p>",
"1-3":"<h2>思いやりのある言葉って、いいよね。<br>今日は少しだけ話せたような気がする。</h2><p>「思いやりのある言葉を話そう」<br>そうは思っても、いっぺんにやろうとすると続かないもの。<br>だから、あせらなくてもいいよ。少しずつやることです。<br>昨日よりちょっとだけできれていれば、OK。昨日よりできない日があっても⋯⋯それでもいいの。よくがんばってるって、思えばいい。<br>少しずつ少しずつやっていけば、自然にできるようになるもの。積み重ねが大事なんです。</p>",
"1-4":"<h2>みんなで幸せになろうよ。人間だもん。</h2><p>幸せって、みんなでならないと、なれないんだよね。<br>「自分だけ幸せ」って、言葉では言えても、実際には「自分だけ幸せ」なんてことはありえないんです。<br>自分の周りの人間が不幸で苦しんでいるのに、「自分だけ幸せ」になれるはずがない。<br>だから、「みんなで幸せになろう！」「小さな笑顔から始めよう！」。</p>",
"1-5":"<h2>誰かに愛されたいのであれば、まずは、あなたが愛することだよ。</h2><p>もし、あなたが誰かに愛されたいと思うなら、まず自分から誰かを愛してみることだよ。<br>ただし、全員に好かれようなんておもっちゃいけない。<br>それは、自分の本当の気持ちを閉じ込めてしまうことになるから。<br>自分を愛してくれる人は、ひとりいればいいんです。<br>嫌われることを恐れて、自分の気持ちを隠すのはよくないよ。<br>きちんと、愛する気持ちを伝えることだよ。</p>",
"1-6":"<h2>仕事は本気にならないとダメ。命をかけてやっているうちに使命感が生まれてくる。</h2><p>仕事はね、とにかく本気でやるべき。<br>自分にこの仕事は合っていないんじゃないか？このままやっていていいのだろうか？なんて悩んでいては、いつまでたってもうまくいかない。<br>その仕事が「天職」なのかどうかわかるためには、まずは、命がけでやるしかないんです。命がけでやっていくと、いつしか使命感が生まれます。使命感を持って仕事をやっていけば、どんな仕事も楽しくなるのです。<br>もし、天職ではないのなら、転職するように運が流れていきます。<br>だから、クヨクヨせずに、今の仕事に邁進していくことです。</p>",
"1-7":"<h2>「このままでいいんだよ」って言ってごらん。そのほうが相手も自分も楽だから。</h2><p>「自分はこのままで最高です」。<br>そう自分に言ってごらん。<br>最高じゃなくていいんだよ。声に出す努力をするだけでいいんです。<br>そして、周りの人には、「あなたはそのままで行きなよ。そのままのあなたが素晴らしいんだから」って言ってあげよう。<br>そのほうが相手も楽でいれるから。<br>どんな人でも、その人を変えようとしないことだよ。</p>",
"1-8":"<h2>人は愛する人のためなら、がんばれる</h2><p>人間って、「愛する人」のためならがんばれるんです。そして、世の中で一番強いのは「愛の力」です。<br>愛するだんなさんのため、愛する子どものため、愛する彼女のため、そのためなら、つらい仕事だってやれるんです。<br>「恨みの心は強い」とか、「妬みの心は強い」とか、いろいろ言いますけど、そんなのはウソです。<br>愛の力さえあれば、踏ん張れるようになっているの。この力はスゴイよ。世界も救うし、あなた自身も救うことができるんです。</p>",
"1-9":"<h2>困ったことが起きたら「面白いことが起きた！」と言ってみな。奇跡が起きるから。</h2><p>人間を「成功に導く階段」があります。<br>それは「困ったこと」なんです。<br>「困ったこと」が起きたときは、「困ったなぁ」って言わないこと。なぜなら、階段を一歩降りてしまうことになるから。<br>だから、困ったことが起きたら、「面白いことが起きたぞ！」と言ってごらん。階段をひょいと飛び上がることができるから。<br>「面白いことが起きたぞ！」と言えた時点で、世間にも神様にも「こんなことで困ってないよ！」という宣言になるんです。<br>このひと言で「あなたの勝ち」が決定するんです。</p>",
"1-10":"<h2>楽しいから成功するんです。成功したから楽しいんじゃないんです。</h2><p>楽しく仕事をしていると、時間が経つのも忘れてしまう。<br>すると、いつもニコニコ楽しそうだから、よけい仕事を頼まれることになります。そしてね、いい仕事もこなせるようになるのです。<br>「仕事」を楽しくこなしているから、「私事」まで頼まれる。<br>そうすると、あなたを慕う人がどんどん増えていく。あなたのファンが集まってくるの。そして、気がついたら成功者になってるんです。<br>世の中ってシンプルなんだよ。</p>",
"1-11":"<h2>よく考えて、行動すれば成功は間違いないですよ。安心、安心。</h2><p>「企画」という言葉があります。「企てる（くわだてる）」という意味です。そして、「企てて行う」から「企業」になるんです。<br>よく練って、よく考えてから、事を起こさないと仕事は成功しないんです。何も考えずに行動したら、99パーセント、ハズレます。<br>だから、よく考えてから実行してください。<br>そうすれば、誰がやっても99パーセント成功するんです。</p>",
"1-12":"<h2>女性は強い！本当は強いということをもっと意識するといいよ。</h2><p>女性って弱い生き物と思っている人が多いよね。確かに身体は小さくて体力的には弱いかもしれない。<br>でも、女性は本来、強くできているんです。それに柔軟性もあるんだよね。男性のように何かあると、ポキっと心が折れることもない。本当に、強いんです。<br>その強さを女性は、もっともっと前面に出したほうがいいよ。<br>だって、この世には、「強い女性」と「ものすごく強い女性」しかいないんだから。</p>",
"1-13":"<h2>いい日とは、自分に「ありがとう」を言える日。</h2><p>「ありがとう」って、毎日いっぱい言ってごらん。<br>食事を作ってくれる人に「ありがとう」。会社の人に「ありがとう」。駅員さんに「ありがとう」。大事な家族に「ありがとう」。<br>不思議だよ。「ありがちこと」がいっぱい起きるから。<br>それでね、自分にも「ありがとう」って言ってみる。<br>すると、心がホワッとした気持ちになって、いつしか幸せな気分になるんです。「今日もいい日だなぁ」って心から思えるようになるんです。<br>だから今日は、寝る前でいいから、自分に「ありがとう」って言ってみてください。</p>",
"1-14":"<h2>カッコよくないとダメだよ。最終的にカッコいいヤツに人はついてくる。</h2><p>「カッコいい」って、さりげないんだよ。それでいて、はたから見て「なんかスゴイ」って思わせる人のことを言うんだ。<br>たとえば、部下の功績について、上司に「これはあいつの功績です」って言う。逆に、部下が失敗したときには「これは私の責任です」って言う。誰から見てもカッコいいでしょ。<br>自分の人生を映画にしたときに、どんな主役になればいいか考えてごらん⋯⋯そうだよね。カッコよくないとダメだよね！<br>そもそも、カッコいいやつには、大勢の仲間がついてくるものなんです。</p>",
"1-15":"<h2>商売は笑顔と愛嬌！まずはお客様の心をつかむこと。</h2><p>感じ悪いお店には行かないよね。うまくいかない人は、自分でも行かないようなお店をやっているんだよ。愛想が悪い、笑顔がない、出すものがまずい、掃除が行き届かない⋯⋯そんなお店は行きたくないよ。<br>自分が行って、また行きたくなるようなお店にしなくちゃ、人は入らない。商売も仕事も、同じこと。<br>今日は、笑顔で仕事をしてみようよ。</p>",
"1-16":"<h2>相手の欠点を責めない。「お互い助け合う部分がある」と思えばいい。</h2><p>人は誰でも、弱い部分と強い部分があるんです。<br>だから、人の欠点を責めちゃうと、自分の弱い部分も隠さなくちゃいけなくなる。「あの人の欠点を指摘したから、次は誰かに自分の弱い部分を責められてしまうのではないか」って、つい考えちゃうんです。<br>でも、あなたの弱い部分はあなたの欠点じゃないんですよ。誰かがそのあなたの弱い部分を補えばいいだけ。<br>「自分があの人の弱い部分を助けてあげよう」。<br>そうやってみんなが助け合えたら、世界はやさしさにあふれるんです。</p>",
"1-17":"<h2>何もないとき「ツイてる」。困ったときは「ありがとう」。いいことあったら「感謝してます」。これで幸せ。</h2><p>成功している人を見てごらん。<br>感謝の心を忘れてないんだよ。<br>いいことがあったときはもちろん感謝するし、何もないときは「何もなくてよかった」と感謝する。<br>さらには、悪いことや人にだまされるようなことがあっても、「あの人のおかげで勉強になった」と、感謝するものなんです。<br>そういう人は、100パーセント成功します。<br>失敗することは不可能です。</p>",
"1-18":"<h2>「三出せ主義」が仕事のツキを呼ぶ。誰でもできる秘策だよ。</h2><p>①金を出さずに、知恵を出す。<br>②知恵がなけらば、汗を出す。<br>③何も出さない怠け者は、追い出す。<br>この「三出せ主義」をやり続けていけば、資金がなくても仕事は成功できるよ。<br>商売や起業をするときに、投資しすぎると失敗したときのことが不安になるもの。でもこの「三出せ主義」を実行すれば、たとえ失敗しても、やり直すことができます。</p>",
"1-19":"<h2>「生きているだけで幸せ」って思える時が一番幸せ。</h2><p>朝、起きたら「生きていた！」と叫んでみてください。<br>だって、夜中のうちに死んでいたら、もう目が覚めないことになっていますからね。<br>「生きていた！」と叫んでみると、「生きているだけで幸せ」って思えたりするものです。不幸を抱え込むより、こんなバカバカしいことをやってみるほうが価値があるものです。<br>これができれば、次から次へといいことが起きて、今までで一番「生きててよかった日」になりますよ。</p>",
"1-20":"<h2>たとえ裏切られても人を信じることをやめたらダメだよ。</h2><p>人を育てようと思うなら、「君ならできる！」「あんたならできる！」と愛のある言葉をかけてあげること。相手を信じてあげてください。<br>「この人、大丈夫かな」「この人のこの成績じゃ、上へ上がれないや」と思っていたら、決して伸ばすことはできません。<br>「君ならできる！」と、ことあるごとに言ってあげてください。<br>人を信じることをやめないこと。<br>何があっても信念を曲げないで、信じ続けることですよ。</p>",
"1-21":"<h2>人は花だよ。だから、見事に咲いてほしい。</h2><p>人の一生は１回きり。<br>それは神様がくれた、この世というパーティーへのご招待なのです。だから、ステキな姿で、美しくパーティーに出ていけばいいんです。<br>「目立たないほうがいいよ」って言う人もいるけれど、この世界に来たのに引っ込んでいてはもったいない。<br>「人は花」<br>花は花として目立っていなければなりません。そして、花ならば、見事に咲き誇ってほしいのです。</p>",
"1-22":"<h2>心の中で思ったことを、そのまま口に出してはいけないよ。</h2><p>心に思ったことをそのまま言葉にしたら、大変なことになるよ。だって、本当のことでも、言っちゃいけないことが山ほどあるでしょ。<br>初対面の仕事相手を見て、「この人、ブサイクだな」と思って、そんなこと言ってしまっては、相手が傷つくのはもちろん、仕事だってうまくいかなくなる。<br>上司がネチネチうるさく注意をしている最中に「面倒くさいな、このおやじ」とは、決して言えないよね。<br>思ったことは、よく考えてから言葉にする必要があるんです。これが大人のマナーなんです。</p>",
"1-23":"<h2>ダメな自分の一番の応援団は自分なんだよ。</h2><p>「自分はなんてダメなんだ」。<br>「もう自分が嫌いでしかたがない」。<br>こんな気持ちでいるときは、思い出してください。<br>「最高に情けない、ダメな自分の一番の応援団は自分なんだ」ということを。<br>あなたはあなたの味方でいてください。自分のよくないところは、いくらでも周りが指摘してくれる。自分で自分のダメ出しをする必要はない。<br>まずは、自分を励まして、幸せにしてあげることだよ。</p>",
"1-24":"<h2>人間は、ひとりひとり、とんでもない才能があるんだけど、みんなそのことを知らないで生きている。</h2><p>人間ってね、みんなスゴイ才能を持っているのに、その才能に気が付かないんだよね。<br>絵がうまいとか、足が速いとか、歌が上手とか、そういうことが才能って思ってるでしょ？<br>でも、ほとんどのサラリーマンはグチを言いながらも定年まで働き続けてるじゃない？　これは辛抱という、とんでもない才能を持っているんです。その才能を活かしていると思うと、急に楽しくなっちゃう。”イヤなことをしてるんだ”じゃなくて、”才能があるんだ”と思うと人生違ってくる。そういう目で物事を見ていけば、人生も楽しく変えることができるんです。</p>",
"1-25":"<h2>オレたちはね、主役で脚本家なんだよ。今のドラマがイヤなら脚本を変えればいいんだよ。</h2><p>生まれる前にね、自分の人生は「悲劇」と決めている人もいるんです。そんな気持ちのまま生きていると、悲しいことばかり起こって、何をしても泣いてばかりいるんだよ。<br>だけど、その悲しいドラマは、一瞬でオセロみたいにひっくり返すことができるんです。<br>それには自分で、脚本を変えればいいの。<br>悲劇から喜劇に変えれば、楽しい人生に変わっちゃう。早く書き換えてしまおうよ。</p>",
"1-26":"<h2>「天国言葉」を話しなよ。口から愛があふれてくるよ。</h2><p>私には多くのお弟子さんがいますが、彼が最初に教えたのが、使ってほしい「天国言葉」です。<br>「愛してます」「ツイてる」「うれしい」「楽しい」「感謝してます」「幸せ」「ありがとう」「ゆるします」<br>こんなきれいな言葉、自分も相手も効いていて楽しくなるような言葉を使っていると、人生が必ずいい方向へ向かうんです。<br>天国言葉を口ぐせにすることだよ。だまされたと思って、言ってごらん。</p>",
"1-27":"<h2>「地獄言葉」は恐れから出る言葉。口にしたところで、いいことないよ。</h2><p>いい言葉は口ぐせに、悪い言葉はあなたの辞書から抹消しちゃおうよ。<br>私は、口ぐせにしたい、いい言葉を「天国言葉」として、反対に言ってはいけない悪い言葉を「地獄言葉」として、お弟子さんたちに教えてきました。<br>「恐れている」「ツイてない」「不平不満」「グチ」「泣き言」「悪口」「文句」「心配事」「ゆるせない」<br>こうした自分も相手も心が苦しくなるような地獄言葉をしゃべっていると、しゃべった通りの苦しい人生になっていくんです。地獄言葉は、恐れから出る言葉。恐れる必要なんてないんです。あなたは大丈夫だからね。</p>",
"1-28":"<h2>「楽しい」「きれい」「明るい」と感じられる場所に行けばいいアイデアが生まれる。</h2><p>幸せに満ちた、元気が出る場所にいると、たくさんの幸運に恵まれます。だから、寒いからと引きこもってないで、積極的に外へ出ていこうよ。<br>「楽しい」「きれい」「明るい」と感じられる場所へ行くと、ひらめきが生まれやすくなって、いい結果を生むことができるんです。<br>ディズニーランド、大衆演劇、バレエ、美術館⋯⋯あなたが行きたいワクワクする場所なら、どこでもいいよ。私のお弟子さんたちは、それぞれ講演会を行っているけど、好きな人の講演会を聞きに行ってもいいよね。<br>さらに、仕事場や家も、楽しくて、きれいで明るい空間にすること。あなただけでなく、みんなが運を開くことができるからね。</p>",
"1-29":"<h2>他人のよくないところばかり指摘していても運勢はよくならない。</h2><p>「最近太り過ぎじゃないの」とか「あんなお店によく通うね」とか、ついうっかり、人をさげすむような言葉を口にしちゃうことがあるよね。<br>でもね、そのひと言で運勢が悪くなることがあるんです。もちろん、人の悪口やグチを言いたいという人は、言えばいい。<br>ただ、「天網恢恢疎にして漏らさず」なんだよ。つまり、「天の神様がみんな見ているから、ごまかせないですよ」ということ。<br>誰も見ていなくても、神様はわかっているからね。</p>",
"1-30":"<h2>自分の「いいとこ」を発見できると他人の「いいとこ」も発見できる。</h2><p>「手がきれい」「話が上手」「カラオケが得意」⋯⋯自分の「いいとこ」をいっぱい発見してみよう。<br>すると、他人の「いいとこ」も発見できるようになってきます。<br>でも、自分のアラ探しばっかりしているような人は、他人の欠点も発見できるんです。自分の１０倍ぐらいアラを見つけて、文句を言いたくなっちゃう。<br>それより、自分の「いいとこ」を山ほど見つけてみようよ。</p>",
"1-31":"<h2>うつむいていた私<br>何も言えなかった私<br>あなたに初めて会ったとき<br>輝く自分をみつけました<br>今私は、幸せに向かって<br>大きく翼をひろげます</h2><p></p>",
//2月の記事
"2-1":"<h2>「ありがとう」を１日１００回言おうね。</h2><p>「ありがとう」って、１日に１０００回言うと、スゴくいいんです。<br>最初は１００回くらいでいいかな。何も言わないよりは、たった１回でもいいんだけど、まあ１００回言うといいよね！だって、周りの人の笑顔が１００回見られるからね。<br>つまり、１０００回の笑顔を見たかったら、１０００回「ありがとう」って言えばいい。<br>今日は１回でいいから、誰かに「ありがとう」って言ってみようよ。おまけに、あなたのとびきりの笑顔も添えて。</p>",
"2-2":"<h2>自分らしい仕事の仕方、自分らしい生き方をしていれば成功者になれるはず。一人さんはそう思うよ。</h2><p>人間はひとりひとり、顔も違えば、生まれた場所も違う。性格だって、考え方だって違います。それが自然だし、みんな違うということがいいところなんです。<br>だからさ、自分らしく生きること。<br>自分が楽しく生きることが大切だよ。<br>仕事もそう。<br>自分らしい仕事の仕方を見つけて、やり続けることです。それで、成功者になれるんです。</p>",
"2-3":"<h2>人生にはいろいろな宝物があるけど、その中で最高の宝物は今日も元気で働けること。</h2><p>人生の宝物って何でしょうか？<br>それは「健康」です。それと「笑顔」です。そして「やさしさ」です。人生にはいろいろ宝物があるんです。<br>あなたが「健康」で「笑顔」で「やさしさ」を見せれば、みんなからは「あなた自身も宝物」のように思ってもらえるんです。<br>そしてね、「元気で働けること」が何よりの宝物。<br>一人さんは、そう思って、毎日ニコニコ、楽しんで働いています。<br>さあ、今日も楽しく働こう！</p>",
"2-4":"<h2>厄年は「飛躍の年」</h2><p>男にも女にも厄年ってあるよね。厄年とは、厄災が多く降りかかるとされる年齢のことだけど、日ごろから神様を大切にしている一人さんは、厄年は「飛躍の年」だって思っている。<br>厄年になったら、「この一年飛躍するぞ」ってワクワクしながら一年を過ごすんです。こうやって厄年を過ごした私のお弟子さんたちは、収入が増えたり、出世したり、幸せで豊かになることがどんどん起きました。<br>不安になって、オドオドしながら過ごしていると、マイナスの波動がイヤなことを引き寄せてしまうんです。「いいことが起こるんだ」と思って、この一年を楽しむことですよ。</p>",
"2-5":"<h2>ツイてる人へ何をやってもうまくいく。ツイてない人は何をやってもうまくいかない。</h2><p>ツイてない人は、何をやってもうまくいきません。面白いほどうまくいきません。はたから見ていても、おかしくなってしまうほどです。<br>ツイてない人は、よくグチを言います。ただ、人生はうまくいかなくなるんです。<br>ツイてる人は、いつも「ツイてる話」をしています。そうすると、面白いほど、いいことが起きるんです。「ツイてる」と言っているだけなのに、人生が違ってきます。<br>でも、ツイてない人は、たったこれだけの話さえ信じることができません。なぜなら、ツイてないからです（笑）。</p>",
"2-6":"<h2>できないことは「できない」と言うことが正しいんですよ。</h2><p>どんなに人類が進歩しても、できないものはできないの。<br>私は、パソコンは苦手だし、漢字を書くのも不得意です。英語もやりたくない。<br>でも、それは得意な人がいるから、頼むことが出来る。<br>どんな時代でも、自分の苦手なことをやって、うまくいくことはないの。だからね、自分ができること、得意なことを考えればいい。<br>もしかしたら、あなたが不得意なことは、私が代わりにやってあげられるかもしれないしね。</p>",
"2-7":"<h2>楽に生きてる人って、感謝が多いんです。イヤなことにも感謝している。もちろん、いいことにも感謝している。</h2><p>人生がトントン拍子にうまくいっている人って、感謝が多い人なんです。どんな人にも「ありがとう」って声をかけている。<br>でも、いいことがあったから、いいことをしてもらったから、感謝するのでは普通だよね。それに、「いいこと」なんてめったにないもん。<br>それより、イヤなことに感謝してごらん。<br>「病気が見つかってよかった。だって、どこが悪いかわかったから」「詐欺にあってよかった。だって、人生の勉強になったから」ってね。</p>",
"2-8":"<h2>「苦あれば楽あり」って言うけどそれは違うよ。「楽あれば楽あり」だよ。</h2><p>「楽あれば苦あり」って言うけど、そんなの信じちゃダメだ。楽だったら、ずっと楽でいいの。苦しいことなんかなくていいじゃない。<br>「苦あれば楽あり」って言うけど、苦しいことの次には、苦しいことしか来ないよ。<br>幸せな人はね、幸せな考え方をするから幸せなんだよ。<br>だから、「楽あれば楽あり」でいきたいよね。</p>",
"2-9":"<h2>一番の大きな間違いは同じ間違いを続けることです。うまくいかなかったらまず、立ち止まってください。</h2><p>何か問題を抱えて、イヤな思いをしていたり、不快感を感じているとしたら、まず、立ち止まってください。その苦しい気持ちは、「あなた、それは間違っている。止まってください」というサインなのです。<br>たとえば、あなたが計算をするとします。１＋１は「２」ですよね。それを「３」と書いたら、先生から「✗（バツ）」をもらうはずです。だから次は「３」を書かないことです。<br>そう、同じ間違いをしないことが大事なんです。そして、間違いに気づいたら、一度立ち止まって、他の答えを考えてみる。これを繰り返すと、答えは必ず、導き出すことができるんです。</p>",
"2-10":"<h2>たいがいの人は自分が「神の子」とは知らない。</h2><p>知っていようと知らなかろうと、みんなが「神の子」なんだよ。<br>この宇宙は「神の愛」でできている。すべての原子や素粒子は「神の愛」でできている。それが集まってできているから、地球だって、人間だって、カエルだって、木だって、全部「神の愛」でできているんです。全部が「神の子」なの。<br>信じようが、信じまいが、本当にそうなの。</p>",
"2-11":"<h2>幸せって、待っているものじゃないの。幸せって、自分でなるものなんだよ。</h2><p>ただ待っているだけじゃ、何も始まらないよ。<br>外に出なきゃ、風を感じることもできない。宝くじを買わなきゃ、宝くじは当たらない。<br>幸せになろうと思ったら、自分から一歩を踏み出すことです。自分が幸せだと、感じることが大事なんです。<br>小さなことでもいい。「今日はごはんがおいしい」「仕事が順調に終わった」「道端のお花がきれい」ってね。<br>他人から幸せにしてもらおうなんて、思っちゃいけないよ。</p>",
"2-12":"<h2>「おいしい」って、言って食べると「おいしい料理」。黙って食べると「ただの料理」。</h2><p>まずいときは、「まずい」って文句を言うくせに、おいしいときに、「おいしい」って、言わない人がいるんだよね。<br>おいしいときには、「おいしい」って言おうよ。一緒に食べてる人も、作った人も嬉しくなるんだよ。<br>それだけで人生、ずいぶん違うよ。</p>",
"2-13":"<h2>人間に必要なのは「お金」「健康な身体」そして、「やさしくて豊かな心」が揃うことなんだよ。</h2><p>この世のあらゆる願いは、お金だけでは決して解決できません。お金があっても、幸せにはなれないということです。<br>健康な身体、そして、人に対してやさしくするという心を持ち合わせていなければ、願いが満たされることはないのです。<br>この三つが揃うように、努力することが大事なんです。<br>お金だけに固執しては、幸せにはなれませんよ。</p>",
"2-14":"<h2></h2><p></p>",
"2-15":"<h2></h2><p></p>",
"2-16":"<h2></h2><p></p>",
"2-17":"<h2></h2><p></p>",
"2-18":"<h2></h2><p></p>",
"2-19":"<h2></h2><p></p>",
"2-20":"<h2></h2><p></p>",
"2-21":"<h2></h2><p></p>",
"2-22":"<h2></h2><p></p>",
"2-23":"<h2></h2><p></p>",
"2-24":"<h2></h2><p></p>",
"2-25":"<h2></h2><p></p>",
"2-26":"<h2></h2><p></p>",
"2-27":"<h2></h2><p></p>",
"2-28":"<h2></h2><p></p>",
"2-29":"<h2></h2><p></p>",
//3月の記事
"3-1":"<h2></h2><p></p>",
"3-2":"<h2></h2><p></p>",
"3-3":"<h2></h2><p></p>",
"3-4":"<h2></h2><p></p>",
"3-5":"<h2></h2><p></p>",
"3-6":"<h2></h2><p></p>",
"3-7":"<h2></h2><p></p>",
"3-8":"<h2></h2><p></p>",
"3-9":"<h2></h2><p></p>",
"3-10":"<h2></h2><p></p>",
"3-11":"<h2></h2><p></p>",
"3-12":"<h2></h2><p></p>",
"3-13":"<h2></h2><p></p>",
"3-14":"<h2></h2><p></p>",
"3-15":"<h2></h2><p></p>",
"3-16":"<h2></h2><p></p>",
"3-17":"<h2></h2><p></p>",
"3-18":"<h2></h2><p></p>",
"3-19":"<h2></h2><p></p>",
"3-20":"<h2></h2><p></p>",
"3-21":"<h2></h2><p></p>",
"3-22":"<h2></h2><p></p>",
"3-23":"<h2></h2><p></p>",
"3-24":"<h2></h2><p></p>",
"3-25":"<h2></h2><p></p>",
"3-26":"<h2></h2><p></p>",
"3-27":"<h2></h2><p></p>",
"3-28":"<h2></h2><p></p>",
"3-29":"<h2></h2><p></p>",
"3-30":"<h2></h2><p></p>",
"3-31":"<h2></h2><p></p>",
//4月記事

        
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

//ふわっと浮かび上がる演出
window.addEventListener('load', function() {
    const fadeInText = document.querySelector('.fade-in-text');
    fadeInText.classList.add('show');
});

