const titles = ["기생충", "미키17", "옥자", "설국열차", "살인의 추억"]; 
const ratings = [8.5, 7.3, 7.4, 7.1, 8.1]; 
const years = [2019, 2017, 2003, 2025, 2013]; 
let sum = 0; 
for (let i = 0; i < ratings.length; i++) { 
    sum = sum + ratings[i]; 
} 
console.log("합계:", sum);   

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0; 
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];    
        maxIndex = i;    
    }
}

let count = 0;
for (let i = 0; i < ratings.length; i++) {
     if (ratings[i] >= 8) {
        count++;
     }
}
console.log(`8점 이상: ${count} + 편`);
console.log("최고:", titles[maxIndex], max);
let label;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > 8.5) { 
        label = "명작";
    }else if(ratings[i] > 7){
        label = "추천";
    }else{
        label = "평작";
    }
    console.log(`${titles[i]} + ${years[i]} : " + ${ratings[i]} + "  " + ${label}`);
}
console.log("js코드는 html을 더욱더 유동적으로 연결할때 사용한다");
