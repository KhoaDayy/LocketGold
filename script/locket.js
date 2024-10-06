const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': 'vip+watch_vip',
    'Locket': 'Gold'
  };
  
  const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
  let obj = JSON.parse($response.body);
  obj.Attention = "Chúc mừng bạn! Vui lòng không chia sẻ cho người khác!";
  
  const locket02 = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    expires_date: "2099-12-18T01:04:17Z",
    purchase_date: "2024-04-12T01:04:17Z",
    store: "app_store"
  };
  
  const locket01 = {
    purchase_date: "2024-04-12T01:04:17Z",
    product_identifier: "com.locket02.premium.yearly",
    expires_date: "2099-12-18T01:04:17Z"
  };
  
  const matchedKey = Object.keys(mapping).find(key => ua.includes(key));
  const productIdentifier = matchedKey ? mapping[matchedKey] : "com.locket02.premium.yearly";
  
  if (!obj.subscriber.subscriptions) {
    obj.subscriber.subscriptions = {};
  }
  if (!obj.subscriber.entitlements) {
    obj.subscriber.entitlements = {};
  }
  
  if (matchedKey) {
    obj.subscriber.subscriptions[productIdentifier] = locket02;
  } else {
    obj.subscriber.subscriptions["com.locket02.premium.yearly"] = locket02;
  }
  
  obj.subscriber.entitlements[productIdentifier] = locket01;
  
  $done({ body: JSON.stringify(obj) });
  