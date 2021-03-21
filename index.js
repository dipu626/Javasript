try {
    // code test
    alert("Hi Everybody");
    alert(x);

} catch (error) {
    // handle error
    console.log(error.name + " " + error.message);
    console.log(error);    
} finally {
    alert("Goodbye Everybody");
}