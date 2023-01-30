import app from "./app";

const main=()=> {
    app.listen(app.get("PORT"));
    console.log(`Server on port ${app.get("PORT")}`);
}

main();

