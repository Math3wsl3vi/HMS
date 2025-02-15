import React from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";
import { Button } from "./ui/button";

const PersonalDetails = () => {
  return (
    <div className="">
    <h1 className="text-xl mb-3">Personal Details</h1>
    <div className="flex flex-col gap-5">

      {/* top */}
    <div className="flex flex-row gap-5 items-center">
      <div className="w-1/3">
        <label className="">Service Number</label>
        <Input className="mt-2" />
      </div>
      <div className="w-1/3">
        <label className="">Registration date</label>
        <Input className="mt-2" />
      </div>
      <div className=" w-1/3 flex items-center gap-10  mt-7">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2"  />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none"
          >
            Spouse
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none"
          >
            Child
          </label>
        </div>
      </div>
    </div>
    <hr className="mt-7"/>
    <h1 className="text-xl">Personal Details</h1>

    {/* personal */}
    <div className="flex flex-row gap-5 items-start">
      <div className="w-1/3">
        <div className="flex w-full items-center">
        <label className="w-1/3">First Name</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Middle Name</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Last Name</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Gender</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Date of Birth</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Email</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Marital Status</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Unit</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Rank</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Blood Type</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3 flex items-center justify-center gap-5">
      <h1>Upload Image</h1>
      <div className="border p-10 w-44 h-44 cursor-pointer flex items-center justify-center rounded-md">
        <Image src='/images/user.png' alt="user" width={50} height={50}/>
      </div>
      
      </div>
    </div>
    <hr className="mt-7" />

    {/* home address */}
    <h1 className="text-xl">Home Address</h1>
    <div className="flex flex-row gap-5 items-center">
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Address</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">County</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">City</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Postal Code</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className=" w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Home Phone</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">secondary Address(optional)</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
    </div>
    <hr className="mt-7" />


    {/* Emergency contact */}
    <h1 className="text-xl">Emergency Contact</h1>
    <div className="flex flex-row gap-5 items-start">
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Full Name</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Relation</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Phone Number</label>
        <Input className="mt-2 w-2/3" />
      </div>
      <div className="flex w-full items-center">
        <label className="w-1/3">Telephone</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className=" w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Email</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
    </div>
    <hr className="mt-7" />

    {/* Insurance */}
    <h1 className="text-xl">Insurance provider</h1>
    <div className="flex flex-row gap-5 items-start">
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Insurance Provider</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Insurance Provider Number</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
      <div className="w-1/3">
      <div className="flex w-full items-center">
        <label className="w-1/3">Provider Expiry Date</label>
        <Input className="mt-2 w-2/3" />
      </div>
      </div>
    </div>

    <div className="flex justify-end">
      <Button className="w-[200px] bg-green-1">Save Patient</Button>
    </div>
    </div>
    </div>
  );
};

export default PersonalDetails;
