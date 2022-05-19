export default function (context) {
    if(!context.store.getters.getIsAdmin){
        context.redirect("/products")
    }
}