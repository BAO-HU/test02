<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>登入</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">
</head>

<body>
<?php
//使用者按下登入後檢查電子郵件與密碼是否空白，如果是請顯示 Email與密碼不可空白，否則將Email導入menu.php

    $errmsg = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $password = $_POST["password"];
        
        if (empty($email) || empty($password)) {
            $errmsg = "Email與密碼不可空白";
        }
        else {
            header("Location:menu.php?email=".$email);
            die();
        }
    }
?>
<form class="form-signin" action="signin.php" method="post">
  <h1 class="font-weight-normal" style="color:#03C">請登入</h1>
      <label for="inputEmail" class="sr-only">電子郵件</label>
      <input name="email" type="email" id="inputEmail" class="form-control" placeholder="電子郵件" autofocus>
      <label for="inputPassword" class="sr-only">密碼</label>
      <input name="password" type="password" id="inputPassword" class="form-control" placeholder="密碼">
      <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
<?php
//顯示錯誤訊息<h6 class='text-danger'></h6>
echo "<h6 class='text-danger'>$errmsg</h6>";
?>      
</form>

</body>
</html>
