<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>

<template>
	<main>
		<div class="overlay" v-if="showModal">
			<div class="modal">
				<textarea name="note" id="note" cols="30" rows="10"></textarea>
				<button>Add Note</button>
				<button class="close" @click="showModal = false">Close</button>
			</div>
		</div>
		<div class="container">
			<header>
				<h1>Notes</h1>
				<button @click="showModal = true">+</button>
			</header>
			<div class="cards-container">
				<div class="card">
					<p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sint. Distinctio illum tempora iure ex.</p>
					<p class="date">06/07/1998</p>
				</div>
				<div class="card">
					<p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sint. Distinctio illum tempora iure ex.</p>
					<p class="date">06/07/1998</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
main {
	height: 100vh;
	width: 100vw;
}
.container {
	max-width: 1000px;
	padding: 10px;
	margin: 0 auto;
}
header {
	display: flex;
	justify-content: space-between;
}
h1 {
	font-weight: bold;
	margin-bottom: 25px;
	font-size: 75px;
}
header button {
	border: none;
	padding: 10px;
	width: 50px;
	height: 50px;
	cursor: pointer;
	background-color: rgb(21, 20, 20);
	border-radius: 100%;
	color: white;
	font-size: 20px;
}
.cards-container {
	display: flex;
	flex-wrap: wrap;
}
.card {
	width: 225px;
	height: 225px;
	background-color: rgb(237, 182, 44);
	padding: 10px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 20px;
	margin-bottom: 20px;
}
.date {
	font-size: 12.5px;
	font-weight: bold;
}
.overlay {
	z-index: 10;
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.77);
}
.modal {
	width: 750px;
	background-color: #fff;
	border-radius: 10px;
	padding: 30px;
	position: relative;
	display: flex;
	flex-direction: column;
}
.modal button {
	padding: 10px 20px;
	font-size: 20px;
	width: 100%;
	background-color: blueviolet;
	border: none;
	color: white;
	cursor: pointer;
	margin-top: 15px;
}
.modal .close {
	margin-top: 7px;
	background-color: rgb(193, 15, 15);
}
</style>
