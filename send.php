 <?php
 if (isset($_POST['action']))
 {
 	switch ($_POST['action']){

 		case 'question':{
 			$recipient="magatextile@gmail.com ";

 			if (isset($_POST['model_name']))
 				$model_name=$_POST['model_name'];

			if (isset($_POST['kit']))
 				$kit=$_POST['kit'];

			if (isset($_POST['price']))
 				$price=$_POST['price'];

 			if (isset($_POST['email']))
 				$email=$_POST['email'];

 			if (isset($_POST['tel']))
 				$tel=$_POST['tel'];
 			

 		

 			$subject='Замовлення комплекту постелі';
 			$message='

 			<html>
	<head>
		<meta charset="UTF-8">
		<style>

			tbody td {
				padding: 10px 0px 10px 50px;
			}
			tbody tr:hover {
				background: #d7e0e8;
				cursor: pointer;
			}

		</style>
	</head>
	<body>
		<table style="width: 100%;" border="0">
			<tbody>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Модель:</td>
					<td style="font-size: 15px;">'.$model_name.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Комплект:</td>
					<td style="font-size: 15px;">'.$kit.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Ціна:</td>
					<td style="font-size: 15px;">'.$price.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Емейл:</td>
					<td style="font-size: 15px;">'.$email.' </td>
				</tr>
				<tr>
					<td style="font-weight: 600; font-family: sans-serif; font-size: 15px; width: 140px;">Телефон:</td>
					<td style="font-size: 15px;">'.$tel.' </td>
				</tr>

				<tr class="last" style="background:#fff !important;">
					<td style="padding: 10px 0; background:#fff;" colspan="2">&nbsp;</td>
				</tr>

			</tbody>
		</table>
	</body>
	</html>';
 			$headers  = 'MIME-Version: 1.0' . "\r\n";
 			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 			$headers .= 'From: no-replay@maga-textile.space//' . "\r\n" .'X-Mailer: PHP/' . phpversion();
 			break;
 		}
 		default: header('Location: /');
 	} 
 	mail($recipient,$subject,$message,$headers);
 	echo($name .$email .$message);
 	header('Location: /');
 }


 ?> 