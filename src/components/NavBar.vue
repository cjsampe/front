<template>
    <nav>
        <router-link class="enlaces" to="/">Home |</router-link>
        <router-link class="enlaces" to="/level">Niveles |</router-link>
        <router-link class="enlaces" to="/feature">Consejos |</router-link>
        <router-link class="enlaces" to="/">Proyecto |</router-link>
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

</style>