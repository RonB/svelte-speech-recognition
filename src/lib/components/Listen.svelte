<script lang="ts">
	import type { SpeechRecognitionType } from '$lib/SpeechRecognition';
	export let language = 'en-US';
	export let continuous = false;
	export let SpeechRecognition: SpeechRecognitionType;
	export let buttonText = continuous ? 'Listen Continuously' : 'Listen Once';

	const startListening = () => SpeechRecognition.startListening({ continuous, language });
</script>

<button class="border border-solid p-2 border-black rounded" on:click={startListening}>
	{buttonText}
</button>
