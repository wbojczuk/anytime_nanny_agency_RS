import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Tempform | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Tempform | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function TempformPage(){
	 return(
	 	 <>
			<form action="/submit" method="post">
  <h2>Client Application Form</h2>
  <fieldset>
    <legend>Client/Corporation Information</legend>
    <label>
      Client or Corporation Name(s)*:{" "}
      <input type="text" name="client_name" required="" />
    </label>
    <br />
    <label>
      Spouse Name: <input type="text" name="spouse_name" />
    </label>
    <br />
    <label>
      Home Address*: <input type="text" name="home_address" required="" />
    </label>
    <br />
    <label>
      City*: <input type="text" name="city" required="" />
    </label>
    <br />
    <label>
      State*: <input type="text" name="state" required="" />
    </label>
    <br />
    <label>
      Zip / Postal Code*: <input type="text" name="zip" required="" />
    </label>
    <br />
    <label>
      Home Phone: <input type="tel" name="home_phone" />
    </label>
    <br />
    <label>
      Home Fax: <input type="text" name="home_fax" />
    </label>
    <br />
    <label>
      Home Email*: <input type="email" name="home_email" required="" />
    </label>
    <br />
    <label>
      Other Addresses: <textarea name="other_addresses" defaultValue={""} />
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>Employment Information</legend>
    <label>
      Occupation: <input type="text" name="occupation" />
    </label>
    <br />
    <label>
      Employed by: <input type="text" name="employer" />
    </label>
    <br />
    <label>
      Work Phone: <input type="tel" name="work_phone" />
    </label>
    <br />
    <label>
      Work Fax: <input type="text" name="work_fax" />
    </label>
    <br />
    <label>
      Work Email: <input type="email" name="work_email" />
    </label>
    <br />
    <label>
      Spouse Occupation: <input type="text" name="spouse_occupation" />
    </label>
    <br />
    <label>
      Spouse Employer: <input type="text" name="spouse_employer" />
    </label>
    <br />
    <label>
      Spouse Work Phone: <input type="tel" name="spouse_work_phone" />
    </label>
    <br />
    <label>
      Spouse Work Fax: <input type="text" name="spouse_work_fax" />
    </label>
    <br />
    <label>
      Spouse Work Email: <input type="email" name="spouse_work_email" />
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>Job Description - Part One</legend>
    <label>
      Description of Care Needed*:{" "}
      <textarea name="job_description" required="" defaultValue={""} />
    </label>
    <br />
    <label>
      Days &amp; Hours to Work: <textarea name="work_hours" defaultValue={""} />
    </label>
    <br />
    <label>
      Flexibility in Hours: <textarea name="flexibility" defaultValue={""} />
    </label>
    <br />
    <label>
      Salary Range*: <input type="text" name="salary_range" required="" />
    </label>
    <br />
    <label>
      Is Car Provided? <input type="checkbox" name="car_provided" />
    </label>
    <br />
    <label>
      Use Off Duty? <input type="checkbox" name="off_duty_use" />
    </label>
    <br />
    <label>
      Holidays Paid: <input type="text" name="holidays_paid" />
    </label>
    <br />
    <label>
      Vacation (weeks): <input type="text" name="vacation" />
    </label>
    <br />
    <label>
      Other Benefits: <textarea name="benefits" defaultValue={""} />
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>Schedule of Position</legend>
    <label>
      <input type="checkbox" name="schedule" defaultValue="Full Time" /> Full
      Time
    </label>
    <br />
    <label>
      <input type="checkbox" name="schedule" defaultValue="Part Time" /> Part
      Time
    </label>
    <br />
    <label>
      <input type="checkbox" name="schedule" defaultValue="Live In" /> Live In
    </label>
    <br />
    <label>
      <input type="checkbox" name="schedule" defaultValue="Live Out" /> Live Out
    </label>
    <br />
    <label>
      <input
        type="checkbox"
        name="schedule"
        defaultValue="Live Out Stay Over"
      />{" "}
      Live Out (would stay over when needed)
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>Type of Position</legend>
    {/* Add all the position options like Nanny, Housekeeper, etc. */}
    <label>
      <input type="checkbox" name="position_type" defaultValue="Nanny" /> Nanny
    </label>
    <br />
    <label>
      <input type="checkbox" name="position_type" defaultValue="Housekeeper" />{" "}
      Housekeeper
    </label>
    <br />
    {/* Add others as needed */}
  </fieldset>
  <fieldset>
    <legend>Duties Required</legend>
    {/* Create a list of checkboxes for each responsibility */}
    <label>
      <input type="checkbox" name="duties[]" defaultValue="Childcare" />{" "}
      Childcare
    </label>
    <br />
    <label>
      <input type="checkbox" name="duties[]" defaultValue="Cooking" /> Cooking
    </label>
    <br />
    <label>
      <input type="checkbox" name="duties[]" defaultValue="Housekeeping" />{" "}
      Housekeeping
    </label>
    <br />
    <label>
      <input type="checkbox" name="duties[]" defaultValue="Driving" /> Driving
    </label>
    <br />
    {/* Add more from the original list */}
  </fieldset>
  <fieldset>
    <legend>Additional Requirements</legend>
    <label>
      Non-Smoker? <input type="checkbox" name="non_smoker" />
    </label>
    <br />
    <label>
      Driver? <input type="checkbox" name="driver" />
    </label>
    <br />
    <label>
      CPR Certified? <input type="checkbox" name="cpr_certified" />
    </label>
    <br />
    <label>
      First Aid Certified? <input type="checkbox" name="first_aid_certified" />
    </label>
    <br />
    <label>
      Own Car? <input type="checkbox" name="own_car" />
    </label>
    <br />
    <label>
      Uniform Required? <input type="checkbox" name="uniform_required" />
    </label>
    <br />
    <label>
      Pets? <input type="checkbox" name="pets" />
    </label>
    <br />
    <label>
      If Yes, What Kind? <input type="text" name="pet_type" />
    </label>
    <br />
    <label>
      Any Pet Care Needed? <input type="checkbox" name="pet_care" />
    </label>
    <br />
    <label>
      If Yes, What Type of Care? <input type="text" name="pet_care_type" />
    </label>
    <br />
    <label>
      Any Travel? <input type="text" name="travel" />
    </label>
    <br />
    <label>
      Live-In Accommodations:{" "}
      <textarea name="accommodations" defaultValue={""} />
    </label>
    <br />
    <label>
      Other Languages Spoken: <input type="text" name="languages" />
    </label>
    <br />
    <label>
      Restrictions in Position:{" "}
      <textarea name="restrictions" defaultValue={""} />
    </label>
    <br />
    <label>
      Additional Info About Family:{" "}
      <textarea name="additional_info" defaultValue={""} />
    </label>
    <br />
    <label>
      Area You Live In (State &amp; Region):{" "}
      <input type="text" name="location_area" />
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>References</legend>
    <label>
      Reference 1 Name: <input type="text" name="ref1_name" />
    </label>
    <br />
    <label>
      Reference 1 Phone: <input type="tel" name="ref1_phone" />
    </label>
    <br />
    <label>
      Reference 2 Name: <input type="text" name="ref2_name" />
    </label>
    <br />
    <label>
      Reference 2 Phone: <input type="tel" name="ref2_phone" />
    </label>
    <br />
  </fieldset>
  <fieldset>
    <legend>Agreement</legend>
    <label>
      <input type="checkbox" name="agree" required /> I agree to the
      Indemnity Agreement *
    </label>
    <br />
    <label>
      Signature*: <input type="text" name="signature" required />
    </label>
    <br />
  </fieldset>
  <p>
    <em>
      Privacy Policy: Information collected will only be used for the purpose of
      fulfilling our services.
    </em>
  </p>
  <button type="submit">Submit</button>
</form>


	 	 </>
	 )
}