<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>選餐</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
  <div class="container-fluid m-3">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-primary">
        <?php
    //輸出singin傳送之email

    $email = $_GET["email"];
    echo $email; 
		?>
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <img src="imgs/mc_1.png" class="embed-responsive"/>
      </div>
      <div class="col-md-9">
        <form action="order.php" method="post">
		<div class="row">
          <div class="col-md-3 m-1">
            <img class="img-thumbnail" src="imgs/meal1.jpg"/>
            <h5 class="text-primary text-center">雙牛起司黑堡</h5>
			<div class="form-row text-center">
              <div class="col-md-5 text-danger form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="0" id="defaultCheck1" name="order[0][]">
                <label class="form-check-label" for="defaultCheck1">
                  價格 $99
                </label>
              </div>
			  <div class="col-md-6">
                <select class="form-control" name="order[0][]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-3 m-1">
            <img class="img-thumbnail" src="imgs/meal2.jpg"/>
            <h5 class="text-primary text-center">嫩煎鷄腿堡</h5>
			<div class="form-row text-center">
              <div class="col-md-5 text-danger form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="1" id="defaultCheck1" name="order[1][]">
                <label class="form-check-label" for="defaultCheck1">
                  價格 $85
                </label>
              </div>
			  <div class="col-md-6">
                <select class="form-control" name="order[1][]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-3 m-1">
            <img class="img-thumbnail" src="imgs/meal3.jpg"/>
            <h5 class="text-primary text-center">千島黃金蝦堡</h5>
			<div class="form-row text-center">
              <div class="col-md-5 text-danger form-check form-check-inline">
                <input class="form-check-input" type="checkbox" value="2" id="defaultCheck1" name="order[2][]">
                <label class="form-check-label" for="defaultCheck1">
                  價格 $79
                </label>
              </div>
			  <div class="col-md-6">
                <select class="form-control" name="order[2][]">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>    
		</div>
        <div class="col-md-8 offset-md-1 text-center m-3">
        <button class="btn btn-lg btn-danger btn-block" type="submit">購買</button>
      </div> 
	  </div>
      <input type="hidden" name="email" value="<?php echo $email; ?>" />  
      </form>  
    </div>
	
  </div>
</body>
</html>