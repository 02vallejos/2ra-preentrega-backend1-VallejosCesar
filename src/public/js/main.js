// Generamos una istancia de Socket.io
const socket = io();

 socket.on("products", (data) => {
    renderProducts(data)
});

// Funcion para dibujar los prods

const renderProducts = (products) => {
    const productsContainer = document.getElementById("productsContainer");

    //Clear display before render
    productsContainer.innerHTML = "";

    products.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                        <img src="${prod.thumbnail}" alt="${prod.title}" class="card-img">
                        <div class="card-content">
                            <h2 class="card-title">${prod.title}</h2>
                            <p class="card-description">${prod.description}</p>
                            <p class="card-price">${prod.price}</p>
                            <p class="card-stock">Stock:${prod.stock}</p>
                            <button class="card-btn">Eliminar</button>
                        </div>     
        `
        productsContainer.appendChild(card);
        //Add event to delet
        card.querySelector("button").addEventListener('click', () => {
            deleteProduct(prod.id);      
        });
    });
};

//Delete product function
const deleteProduct = (id) => {
    socket.emit("deleteProduct", id);
}
//Agregar prods desde el fomulario

document.getElementById("btnEnviar").addEventListener("click", () => {
    addProduct();
});

const addProduct = () => {
    const product = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        code: document.getElementById("code").value,
        status: document.getElementById("status").value,
        price: document.getElementById("price").value,
        stock: document.getElementById("stock").value,
        category: document.getElementById("category").value,
        thumbnail: document.getElementById("thumbnail").value    
    };
    
    //Add product
    socket.emit("addProduct", product);

    //Delete product
    socket.on("deleteProduct", async (id) => {
        console.log(id);
    })
}