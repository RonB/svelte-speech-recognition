<script lang="ts">
	import type { SpeechRecognitionType } from '$lib/SpeechRecognition';

	export let SpeechRecognition: SpeechRecognitionType;

	const stopListening = () => {
		console.log('Stop');
		SpeechRecognition.stopListening();
	};
</script>

<button class="border border-solid p-2 border-black rounded" on:click={stopListening}
	>stopListening</button
>
