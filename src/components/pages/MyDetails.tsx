"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/src/components/ui/PageHeader";
import Input from "@/src/components/ui/Input";
import CustomSelect from "@/src/components/ui/CustomSelect";
import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";
import { fetchProfile, updateProfile, type LookupOption } from "@/src/services/api";

export interface ProfileForm {
  firstName: string;
  surname: string;
  businessName: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  email: string;
  website: string;
  phone: string;
  mobile: string;
  businessTypeId: string;
  heardFromId: string;
}

export const australianStates = [
  { value: "NSW", label: "New South Wales" },
  { value: "VIC", label: "Victoria" },
  { value: "QLD", label: "Queensland" },
  { value: "WA", label: "Western Australia" },
  { value: "SA", label: "South Australia" },
  { value: "TAS", label: "Tasmania" },
  { value: "ACT", label: "Australian Capital Territory" },
  { value: "NT", label: "Northern Territory" },
];

function toSelectOptions(items: LookupOption[]) {
  return items.map((item) => ({ value: String(item.id), label: item.name }));
}

export const MyDetails = () => {
  const { user, hydrated } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState<ProfileForm>({
    firstName: "",
    surname: "",
    businessName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
    website: "",
    phone: "",
    mobile: "",
    businessTypeId: "",
    heardFromId: "",
  });

  const [businessTypeOptions, setBusinessTypeOptions] = useState<{ value: string; label: string }[]>([]);
  const [heardFromOptions, setHeardFromOptions] = useState<{ value: string; label: string }[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!hydrated) return;
    if (!user) {
      router.replace("/login");
      return;
    }

    fetchProfile(user.token)
      .then((data) => {
        setUserId(data.id);
        setForm({
          firstName: data.firstName ?? "",
          surname: data.lastName ?? "",
          businessName: data.businessname ?? "",
          address: data.address ?? "",
          city: data.suburb ?? "",
          state: data.state ?? "",
          postcode: data.postcode ?? "",
          email: data.email ?? "",
          website: data.website ?? "",
          phone: data.phone ?? "",
          mobile: data.mobile ?? "",
          businessTypeId: data.businessTypeId ? String(data.businessTypeId) : "",
          heardFromId: data.heardFromId ? String(data.heardFromId) : "",
        });
        setBusinessTypeOptions(toSelectOptions(data.businessTypes));
        setHeardFromOptions(toSelectOptions(data.heardFromList));
      })
      .catch(() => setErrorMsg("Failed to load profile. Please refresh and try again."))
      .finally(() => setLoading(false));
  }, [hydrated, user, router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    setSuccessMsg("");
    setErrorMsg("");
    setSubmitting(true);
    try {
      await updateProfile(
        {
          firstName: form.firstName,
          lastName: form.surname,
          businessname: form.businessName,
          address: form.address,
          suburb: form.city,
          state: form.state,
          postcode: form.postcode,
          website: form.website,
          phone: form.phone,
          mobile: form.mobile,
          businessTypeId: form.businessTypeId ? Number(form.businessTypeId) : null,
          heardFromId: form.heardFromId ? Number(form.heardFromId) : null,
        },
        user!.token
      );
      setSuccessMsg("Profile details updated successfully.");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to update profile.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!hydrated || loading) {
    return (
      <>
        <PageHeader title="Edit Profile" />
        <div className="bg-[#FEFAF3] sm:py-16 py-10 flex justify-center">
          <p className="text-[#292560] text-lg">Loading profile…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Edit Profile" />
      <div className="bg-[#FEFAF3] sm:py-16 py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {/* Referral card */}
          <div className="rounded-md shadow-[0_2px_10px_rgb(0_0_0/25%)] sm:px-8 px-6 py-8 bg-white space-y-4">
            <h2 className="text-[#292560] text-2xl font-medium">
              Reduce your printing and design costs
            </h2>
            <p className="text-[#292560] text-md leading-relaxed pt-4 pb-2">
              We&apos;re always looking for ways to save you money on your print
              and design costs, and we&apos;ve come up with an ingenious plan –
              simply refer friends (or even strangers) to Sustainable Printing
              and earn vouchers!
            </p>
            <p className="text-md text-[#292560] font-semibold">
              <strong>You&apos;ll need your own referral url:</strong>{" "}
              <Link
                href="#"
                className="text-[#292560] underline break-all cursor-pointer"
              >
                {`https://www.sustainableprintingco.com.au/ref/${userId ?? ""}/`}
              </Link>
            </p>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#4CCC88] hover:bg-[#3ab87a] text-white text-sm font-normal px-3 py-1 rounded transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16 0c-2.5 0-4.5 2-4.5 4.5 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.48 4.48 0 0 0-.61 2.27c0 1.56.8 2.94 2 3.75A4.5 4.5 0 0 1 .96 6v.06c0 2.18 1.55 4 3.6 4.42a4.52 4.52 0 0 1-2.03.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 0 1 0 15.54 12.8 12.8 0 0 0 6.92 17.5c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.17 9.17 0 0 0 23 3z" />
              </svg>
              Tweet
            </button>
          </div>

          {/* Status messages */}
          {successMsg && (
            <div className="bg-green-50 border border-green-300 text-green-800 rounded-md px-5 py-3 text-sm">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="bg-red-50 border border-red-300 text-red-700 rounded-md px-5 py-3 text-sm">
              {errorMsg}
            </div>
          )}

          {/* Contact details card */}
          <div className="rounded-md shadow-[0_2px_10px_rgb(0_0_0/25%)] sm:px-8 px-6 py-10 bg-white space-y-6">
            <h2 className="text-[#292560] text-2xl font-semibold">
              Contact details
            </h2>
            <h1 className="text-[#292560] font-bold text-xl mb-3 pt-3">
              My billing details:
            </h1>
            <hr className="border-gray-300" />

            <div className="space-y-3">
              <Input
                label="First Name"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Surname"
                name="surname"
                required
                value={form.surname}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Business Name"
                name="businessName"
                required
                value={form.businessName}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Address"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Town / City"
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                inputClassName="w-full"
              />

              <div className="flex flex-col gap-2">
                <label className="text-[#292560] font-medium text-lg">
                  State <span className="text-red-600 ms-1 text-xl">*</span>
                </label>
                <CustomSelect
                  placeholder="-- Select One --"
                  value={form.state}
                  options={australianStates}
                  onChange={(val) => setForm({ ...form, state: val })}
                  className=" border-[#C4C4C4]!"
                />
              </div>

              <Input
                label="Postcode"
                name="postcode"
                required
                value={form.postcode}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                inputClassName="w-full !bg-[#e1e1e1]"
                disabled
              />
              <Input
                label="Website"
                name="website"
                value={form.website}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                inputClassName="w-full"
              />
              <Input
                label="Mobile"
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={handleChange}
                inputClassName="w-full"
              />

              <div className="flex flex-col gap-2">
                <label className="text-[#292560] font-medium text-lg">
                  Business Category
                </label>
                <CustomSelect
                  placeholder="-- Select One --"
                  value={form.businessTypeId}
                  options={businessTypeOptions}
                  onChange={(val) => setForm({ ...form, businessTypeId: val })}
                  className=" border-[#C4C4C4]!"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#292560] font-medium text-lg">
                  Heard from
                </label>
                <CustomSelect
                  placeholder="-- Select One --"
                  value={form.heardFromId}
                  options={heardFromOptions}
                  onChange={(val) => setForm({ ...form, heardFromId: val })}
                  className=" border-[#C4C4C4]!"
                />
              </div>

              <p className="text-[#292560] text-lg font-medium">
                <span className="text-red-500 font-bold">*</span> - Required
                Fields
              </p>
            </div>
          </div>
        </div>

        {/* Buttons outside the card */}
        <div className="flex justify-center gap-4 pt-12">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-[#292560] cursor-pointer hover:bg-[#1e1a4a] disabled:opacity-60 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
          >
            {submitting ? "Saving…" : "Submit"}
          </button>
          <Link
            href="/order"
            className="border cursor-pointer border-[#292560] text-[#292560] font-medium px-6 py-3 rounded-md hover:bg-[#292560] hover:text-white transition-colors duration-200"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};
