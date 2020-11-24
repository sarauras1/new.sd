$(function () {
  $("#WAButton").floatingWhatsApp({
    phone: "+447923808640", //WhatsApp Business phone number
    headerTitle: "Chat with us on WhatsApp!", //Popup Title
    popupMessage: "Hello, how can we help you?", //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="resources/images/whatsapp-img" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right", //Position: left | right
  });
});
