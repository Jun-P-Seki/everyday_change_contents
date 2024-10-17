// script.js
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const month = today.getMonth() + 1; // 月は0から始まるので1を足す
    const day = today.getDate();

    // 記事コンテンツの辞書
    const blogPosts = {
        "1-1": "<h2>新年のご挨拶</h2><p>明けましておめでとうございます！今年もどうぞよろしくお願いいたします。</p>",
        "2-14": "<h2>バレンタインデー</h2><p>今日はバレンタインデーです。大切な人に感謝の気持ちを伝えましょう！</p>",
        "3-3": "<h2>ひな祭り</h2><p>今日はひな祭りです。お雛様を飾って、女の子の健やかな成長をお祝いしましょう。</p>",
        "10-17": "<p>今日は10月17日です。</p>",
        "12-25":
            "<h2>メリークリスマス！</h2><p>今日はクリスマスです。家族や友達と素敵な時間を過ごしましょう。</p>",
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
