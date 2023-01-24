export function toggleClassForHover(id) {
    const parent = document.getElementById(id);
    parent.classList.toggle('active');

}
export function toggleClassForChooseInput(id1,id2) {
    const parent = document.getElementById(id1);
    const subList = document.getElementById(id2);
    parent.classList.toggle('active');
    subList.classList.toggle('active');


   document.getElementById('contactwith_5').classList.remove('active');
   document.getElementById('contactwith_sub_5').classList.remove('active');
}
export function handleContactCheckBox(id) {
    document.getElementById(id).classList.toggle('active');
    document.getElementById('contactwith_5').classList.remove('active');
}
export function handleDonNotContact() {
    document.getElementById('contactwith_1').classList.remove('active');
    document.getElementById('contactwith_2').classList.remove('active');
    document.getElementById('contactwith_3').classList.remove('active');
    document.getElementById('contactwith_4').classList.remove('active');
    document.getElementById('contactwith_5').classList.toggle('active');

    document.getElementById('contactwith_sub_1').classList.remove('active');
    document.getElementById('contactwith_sub_2').classList.remove('active');
    document.getElementById('contactwith_sub_3').classList.remove('active');
    document.getElementById('contactwith_sub_4').classList.remove('active');
    document.getElementById('contactwith_sub_5').classList.toggle('active');
}