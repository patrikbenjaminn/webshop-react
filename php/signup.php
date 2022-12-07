<html>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <div className="container">
    <div className="col-md-6">
    <h2> Rekisteröidy </h2>
    <form method="post" action="createaccount.php">
        <input type="text" name="astunnus" className="form-control" placeholder="astunnus">
        <input type="text" name="etunimi" className="form-control" placeholder="etunimi">
        <input type="text" name="sukunimi" className="form-control" placeholder="sukunimi">
        <input type="text" name="email" className="form-control" placeholder="email">
        <input type="text" name="osoite" className="form-control" placeholder="osoite">
        <input type="text" name="postinro" className="form-control" placeholder="postinro">
        <input type="text" name="postitmp" className="form-control" placeholder="postitmp">        
        <input type="" name="salasana" className="form-control" placeholder="salasana">
        <input type="submit" value="Register">
    </form>
    </div>
</html>