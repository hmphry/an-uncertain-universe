<template lang="">
    <div class="mx-auto max-w-5xl">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl">{{months[activeMonth]}} {{activeYear}}</h1>
            <div>
                <button class="border-2 border-white py-2 px-4 rounded font-bold ml-2">Prev Month</button>
                <button class="bg-red-300 border-2 border-red-300 py-2 px-4 rounded font-bold ml-2">Add Event</button>
                <button class="border-2 border-white py-2 px-4 rounded font-bold ml-2">Next Month</button>
            </div>
        </div>
        <div class="pt-4">

            <div class="font-sans grid grid-cols-7 border-[.05px] border-black-100 border-b-0">
                <div v-for="day in days" class="border-[.05px] border-black-100">
                    <div class="text-center font-bold text-xs text-black-900 py-2">{{[...day].splice(0,3).join("")}}</div>
                </div>
            </div>
            <div class="border-[.05px] border-black-100 border-t-0">
                <div v-for="index in 4" class="font-sans grid grid-cols-7">
                    <div v-for="day in days" class="aspect-h-3 aspect-w-4 border-[.05px] border-black-100">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeMonth: 0,
            activeYear: 2023,
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    }
}
</script>
<style lang="">
    
</style>