<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>結帳</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3 class="text-primary">
      <?php
	  //輸出menu傳送之email
    $email = $_POST["email"];
    echo $email;
	  ?>
      </h3>
    </div>
  </div>
  <div class="list-group">
  
    <div class="list-group-item">
    <?php
    $pname = array("雙牛起司黑堡", "嫩煎鷄腿堡", "千島黃金蝦堡");
    $uprice = array(99, 85, 79);
    $imgSrc = array("imgs/meal1.jpg", "imgs/meal2.jpg", "imgs/meal3.jpg");
    $totalprice = 0;
?>
    
    <?php
    $order = $_POST["order"];
    
    foreach ($order as $i) {
        if (!empty($i[1])) {
            $meal = $pname[$i[0]];
            $price = $uprice[$i[0]];
            $img = $imgSrc[$i[0]];

            $qty = $i[1];
            $oprice = $price * $qty;
            $totalprice += $oprice;

            $oitem =<<< MyDoc
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img src="$img"/>
                    </div>
                    <div class="col-md-6 offset-md-2">
                        <h4 class="text-primary">$meal</h4>
                        <p>單價:$price 數量:$qty</p>
                        <p class="text-danger">金額:$oprice</p>
                    </div>
                </div>
            MyDoc;
            echo $oitem;
        }
    }
    echo "<h1 class='text-danger'>總金額:".$totalprice."</h1>";
?>
  </div>
</div>
</body>
</html>