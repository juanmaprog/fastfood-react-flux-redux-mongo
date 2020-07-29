// import React from "react";
// import "./Imagen.css";

// // export default class Imagen extends Component {
// //     render() {
// //         return (
// //             <div className="col-12 col-sm-6 col-lg-3 mb-4" >
// //                 <div className="card" >
// //                     <img src/>
// //                 </div>
// //             </div>
// //         )
// //     }
// // }

<<<<<<< HEAD
const styleTitle = { width: "30rem" };

const Imagen = (props) => {
  console.log(props);
  const img = props.imagen;
  const des = props.description;
  const link = props.link;
  const col = props.color;

  return (
    <div class="card" style={styleTitle}>
      <div className="col-12 col-sm-6 col-lg-3 mb-4">
        <div className="card">
          <img className="card-img-top" src={img} />
        </div>
        <div>
          <p className="text-center font-weight-bold"> {des} </p>
        </div>
      </div>
    </div>
  );
};
=======
// const styleTitle = { width: "60rem" };

// const Imagen = (props) => {
//   console.log(props);
//   const img = props.imagen;
//   const des = props.description;

//   return (
//     <div class="card" style={styleTitle}>
//       <div className="col-12 col-sm-6 col-lg-3 mb-4">
//         <div className="card">
//           <img className="card-img-top" src={img} />
//         </div>
//         <div>
//           <p className="p-10"> {des} </p>
//         </div>
//       </div>
//     </div>
//   );
// };
>>>>>>> 5c1a633eb20789d1473b0fc924dd3d8cef5212b8

// export default Imagen;
