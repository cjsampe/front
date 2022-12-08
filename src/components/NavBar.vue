<template>
    <nav>
        <router-link class="enlaces" to="/">Home |</router-link>
        <router-link class="enlaces" to="/level">Niveles |</router-link>
        <router-link class="enlaces" to="/feature">Consejos |</router-link>
    </nav>
</template>
<script>
export default {};
</script>
<style>
.enlaces{
    list-style: none;
    display: inline-block;
    color: black;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 5px;
}
nav{
    display: flex;
    align-items: center;
}

/*RESPONSIVE*/

@media screen and (max-width:800px){
    .menu-navegacion{
        /*flex-direction: column;*/
        height: 120px;
        justify-content: space-evenly;
    }}

</style>