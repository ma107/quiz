// 再帰によるフィボナッチ関数の定義
function fib_tail (n) {
  if (n < 2) return n;
  return fib_tail(n - 2) + fib_tail(n - 1);
}

// メモ化によるフィボナッチ関数の定義
// 参考：https://qiita.com/piggydev/items/f240c48e4dd40224b0af
function fib_memo(n,memo={}){
  if(n in memo) return memo[n];
  if(n <= 2) return 1;
  memo[n] = fib_memo(n-1,memo)+fib_memo(n-2,memo);
  return memo[n];
}

onmessage = e => {
  console.log('main.js からイベントオブジェクトを受け取り、フィボナッチ関数の処理を開始');

  if(e.data.command == 'fib_tail'){
      // 時間計測: 開始時間
      const startTime = Date.now(); 
      // 末尾再帰によるフィボナッチ関数の実行
      let result = fib_tail(e.data.number)
      // 終了時間
      const endTime = Date.now(); 
      // かかった時間を計算する
      takenTime = (endTime - startTime)/1000
      // 結果の出力
      result = `入力: ${e.data.number}, 結果 ${result}, ${takenTime}秒かかりました。`;
      postMessage(result);

  } else if(e.data.command == 'fib_memo'){
      // 時間計測: 開始時間
      const startTime = Date.now();
      // メモ化によるフィボナッチ関数の実行
      let result = fib_memo(e.data.number)
      // 終了時間
      const endTime = Date.now(); 
      // かかった時間を計算する
      takenTime = (endTime - startTime)/1000
      // 結果の出力
      result = `入力: ${e.data.number}, 結果 ${result}, ${takenTime}秒かかりました。`;
      postMessage(result)
  }
}


