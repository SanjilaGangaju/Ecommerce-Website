export const showToast = (operation, id)=>{
      const toast = document.createElement("div");
      toast.classList .add('toast');

      if (operation == "add"){
        toast.textContent=`🔔 Product with ID ${id} has been added to your cart.`;

      }
      else{
        toast.textContent= `🔔 Product with ID ${id} has been deleted from your cart.`;
      }
      document.body.appendChild(toast);
      setTimeout(()=>{
        toast.remove();}, 2000
      );
}