import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const DesktopForm = () => {
  return (
    <div className="desktop-form">
      <div className="div">

        <form>
        <div className="overlap">
        <input required type="text" className="rectangle" name="name" placeholder="   Sheldon"/>

          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper">First name</div>

            </div>
          </div>
        </div>




        <div className="overlap-2">
        <input required type="email" className="rectangle-2" name="email" placeholder="Your E-mail"/>

          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Email</div>
            </div>
          </div>
        </div>


      
        <div className="overlap-3">
          <img className="img" alt="Rectangle" src="/img/rectangle-6.png" />
          <div className="group-2">
            <div className="overlap-4">
              <textarea required name="message" placeholder="Message" className="rectangle-3">   </textarea>

              <div className="text-wrapper-3">Message</div>
            </div>
          </div>
        </div>



        
        <div className="overlap-5">
        <input required type="text" className="rectangle-4" name="name" placeholder="   Cooper"/>

          <div className="group-3">
            <div className="overlap-group">
              <div className="text-wrapper-4">Last name</div>
            </div>
          </div>
        </div>



        <div className="group-4">
          <div className="overlap-group-2">
            <button type="submit">         
            <div className="text-wrapper-5">Send</div>
            </button>
          </div>
        </div>






        </form>

        <img className="line" alt="Line" src="/img/line-1-1.png" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <h1 className="h-1">Get a Free, No-Obligation Price Quote</h1>
        <p className="p">
          MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
          diverse markets around the world.
        </p>
        <p className="text-wrapper-6">Magma Translation | All rights reserved. ©Magma™</p>
        <img className="magma-translation-2" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};
