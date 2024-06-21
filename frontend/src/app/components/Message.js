import Swal from "sweetalert2";

export function alertMessage(title, text, icon = "success") {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: false,
    timer: 2000,
  });
}
