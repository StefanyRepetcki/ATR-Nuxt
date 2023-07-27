<template>
        <div>
        <div class="bg-gray-100">
            <div class="container mx-auto flex items-center h10 space-x-4 mb-10">
                <NuxtLink to="/a-empresa">A Empresa</NuxtLink>
                <NuxtLink to="/servicos">Serviços</NuxtLink>
                <NuxtLink to="/produtos">Produtos</NuxtLink>
            </div>
        </div>
        <div class="container mx-auto">
                <h1 class="text-lg font-bold">Serviços</h1>
                <NuxtLink to="/servicos/desenvolvimento-de-sites">Desenvolvimento de sites</NuxtLink>
                <NuxtLink to="/servicos/marketing-digital">Marketing Digital</NuxtLink>
                <br><br>

                <NuxtChild />
        </div>
</div>
</template>
<script></script>