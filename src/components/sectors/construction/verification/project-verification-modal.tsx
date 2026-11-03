import React, { useState } from "react";
import {
  AlertCircle,
  Building,
  CheckCircle2,
  FileCheck,
  FileText,
  Lock,
  Paperclip,
  Shield,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContractingProject } from "../contracting-projects-list";
import { verificationService } from "./verification-service";
import { VERIFICATION_PURPOSES } from "./verification-types";

interface ProjectVerificationModalProps {
  project: ContractingProject | null;
  isOpen: boolean;
  onClose: () => void;
  ar: boolean;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];

export function ProjectVerificationModal({
  project,
  isOpen,
  onClose,
  ar,
}: ProjectVerificationModalProps) {
  // Form State
  const [companyName, setCompanyName] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [website, setWebsite] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [crFile, setCrFile] = useState<File | null>(null);

  const [applicantName, setApplicantName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");

  const [purpose, setPurpose] = useState(VERIFICATION_PURPOSES[0]!.id);
  const [notes, setNotes] = useState("");

  const [authLetterFile, setAuthLetterFile] = useState<File | null>(null);
  const [proofCapacityFile, setProofCapacityFile] = useState<File | null>(null);

  const [declarationConsent, setDeclarationConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successRef, setSuccessRef] = useState<string | null>(null);

  if (!project) return null;

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return ar
        ? `حجم الملف ${file.name} يتجاوز الحد الأقصى 10 ميجابايت.`
        : `File ${file.name} exceeds maximum size limit of 10 MB.`;
    }
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return ar
        ? `صيغة الملف غير مدعومة. الصيغ المسموحة: PDF, JPG, PNG.`
        : `Unsupported file format. Allowed formats: PDF, JPG, PNG.`;
    }
    return null;
  };

  const handleCrFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setErrorMessage(err);
      return;
    }
    setErrorMessage(null);
    setCrFile(file);
  };

  const handleAuthFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setErrorMessage(err);
      return;
    }
    setErrorMessage(null);
    setAuthLetterFile(file);
  };

  const handleProofFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setErrorMessage(err);
      return;
    }
    setErrorMessage(null);
    setProofCapacityFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!companyName.trim()) {
      setErrorMessage(ar ? "يرجى إدخال اسم الشركة" : "Company name is required");
      return;
    }
    if (!crNumber.trim()) {
      setErrorMessage(ar ? "يرجى إدخال رقم السجل التجاري" : "Commercial registration number is required");
      return;
    }
    if (!officialEmail.trim() || !officialEmail.includes("@")) {
      setErrorMessage(ar ? "يرجى إدخال بريد إلكتروني رسمي صحيح للشركة" : "Valid official company email is required");
      return;
    }
    if (!crFile) {
      setErrorMessage(ar ? "إرفاق مستند السجل التجاري إلزامي" : "Commercial registration document is mandatory");
      return;
    }
    if (!applicantName.trim()) {
      setErrorMessage(ar ? "يرجى إدخال اسم مقدم الطلب بالكامل" : "Full name of applicant is required");
      return;
    }
    if (!jobTitle.trim()) {
      setErrorMessage(ar ? "يرجى إدخال المسمى الوظيفي" : "Job title is required");
      return;
    }
    if (!department.trim()) {
      setErrorMessage(ar ? "يرجى إدخال الإدارة أو القسم" : "Department is required");
      return;
    }
    if (!mobile.trim()) {
      setErrorMessage(ar ? "يرجى إدخال رقم الهاتف للتواصل" : "Contact mobile number is required");
      return;
    }
    if (!applicantEmail.trim() || !applicantEmail.includes("@")) {
      setErrorMessage(ar ? "يرجى إدخال بريد إلكتروني صحيح لمقدم الطلب" : "Valid email for applicant is required");
      return;
    }
    if (!declarationConsent) {
      setErrorMessage(
        ar
          ? "يرجى الإقرار بصحة البيانات والتفويض للمتابعة"
          : "You must confirm the legal declaration to proceed"
      );
      return;
    }
    if (!privacyConsent) {
      setErrorMessage(
        ar
          ? "يرجى الموافقة على معالجة البيانات وسياسة الخصوصية"
          : "You must agree to data processing and privacy policy"
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await verificationService.submitRequest({
        projectId: project.id,
        project,
        companyName,
        crNumber,
        country,
        website,
        officialEmail,
        crFile,
        applicantName,
        jobTitle,
        department,
        mobile,
        applicantEmail,
        purpose,
        notes,
        authLetterFile,
        proofCapacityFile,
      });

      if (res.success) {
        setSuccessRef(res.referenceNumber);
      } else {
        setErrorMessage(res.message || (ar ? "حدث خطأ أثناء إرسال الطلب." : "An error occurred during submission."));
      }
    } catch (err: unknown) {
      const e = err as Error;
      setErrorMessage(e?.message || (ar ? "تعذر إرسال الطلب، يرجى المحاولة لاحقاً." : "Failed to submit request."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccessRef(null);
    setErrorMessage(null);
    setCrFile(null);
    setAuthLetterFile(null);
    setProofCapacityFile(null);
    setDeclarationConsent(false);
    setPrivacyConsent(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-border/80 bg-background/95 backdrop-blur-2xl shadow-2xl">
        {successRef ? (
          <div className="py-8 text-center space-y-6">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
              <ShieldCheck className="size-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-head text-2xl font-bold text-foreground">
                {ar ? "تم استلام طلب التحقق بنجاح" : "Verification Request Submitted Successfully"}
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                {ar
                  ? "نشكر اهتمامكم بشركة سامي بن عياد. سيقوم فريقنا المختص بمراجعة البيانات والمستندات المقدمة، وسيتم التواصل معكم عبر بيانات الاتصال المسجلة لاستكمال إجراءات الطلب."
                  : "Thank you for your interest in Sami Bin Ayyad Group. Our compliance team will review the submitted corporate credentials and get in touch via your registered contact details."}
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-flex flex-col items-center justify-center p-4 rounded-2xl bg-muted/40 border border-border/80">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {ar ? "الرقم المرجعي للطلب (Request Reference Number)" : "Request Reference Number"}
              </span>
              <span className="mt-1 font-mono text-xl font-bold text-brand-orange tracking-widest">
                {successRef}
              </span>
              <span className="mt-2 text-[11px] text-muted-foreground">
                {ar
                  ? `المشروع: ${project.nameAr} (#${project.id})`
                  : `Project: ${project.nameEn} (#${project.id})`}
              </span>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <Button
                onClick={handleResetAndClose}
                className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8"
              >
                {ar ? "إغلاق النافذة" : "Close"}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <DialogHeader className="border-b border-border/60 pb-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-text font-head text-xs font-bold border border-brand-green/20">
                  <ShieldCheck className="size-3.5" />
                  {ar ? "المشروعات الموثقة · Verified Projects" : "Verified Projects"}
                </span>
                <span className="font-sans text-xs font-bold text-muted-foreground">
                  Ref: SBA-PRJ-{project.year}-{project.id.toString().padStart(3, "0")}
                </span>
              </div>
              <DialogTitle className="font-head text-xl sm:text-2xl font-bold text-foreground">
                {ar ? "طلب التحقق من المشروع" : "Request Project Verification"}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "يرجى استكمال البيانات التالية لتقديم طلب الاطلاع على المستندات الرسمية الداعمة للمشروع. تخضع جميع الطلبات لمراجعة بيانات الشركة ومقدم الطلب قبل الموافقة على إتاحة المستندات."
                  : "Complete the following information to request access to the official supporting documents of this project. All requests are subject to verification and approval."}
              </DialogDescription>
            </DialogHeader>

            {/* Target Project Mini Bar */}
            <div className="my-5 flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/70 text-xs">
              <div className="flex items-center gap-2">
                <Building className="size-4 text-brand-green shrink-0" />
                <span className="font-bold text-foreground">
                  {ar ? project.nameAr : project.nameEn}
                </span>
              </div>
              <span className="font-sans font-bold px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange">
                {project.year}
              </span>
            </div>

            {errorMessage && (
              <div className="mb-5 flex items-start gap-2.5 rounded-xl bg-destructive/10 border border-destructive/20 p-3.5 text-xs text-destructive">
                <AlertCircle className="size-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* SECTION 1: Company Information */}
              <div className="space-y-3.5">
                <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">
                    1
                  </span>
                  {ar ? "بيانات الشركة (Company Information)" : "Company Information"}
                </h4>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "اسم الشركة *" : "Company Name *"}
                    </Label>
                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={ar ? "شركة المقاولات / الاستثمار..." : "Company Name Ltd."}
                      className="mt-1 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "رقم السجل التجاري *" : "Commercial Registration Number *"}
                    </Label>
                    <Input
                      value={crNumber}
                      onChange={(e) => setCrNumber(e.target.value)}
                      placeholder="1010XXXXXX"
                      className="mt-1 text-xs font-mono"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "دولة تسجيل الشركة *" : "Country of Registration *"}
                    </Label>
                    <Input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder={ar ? "مصر، السعودية، الإمارات..." : "Country"}
                      className="mt-1 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "الموقع الإلكتروني للشركة (اختياري)" : "Company Website (Optional)"}
                    </Label>
                    <Input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://company.com"
                      className="mt-1 text-xs font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Label className="text-xs font-semibold">
                      {ar ? "البريد الإلكتروني الرسمي للشركة *" : "Official Company Email *"}
                    </Label>
                    <Input
                      type="email"
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      placeholder="tenders@company.com"
                      className="mt-1 text-xs font-mono"
                      required
                    />
                  </div>
                </div>

                {/* CR File Upload */}
                <div>
                  <Label className="text-xs font-semibold block mb-1">
                    {ar ? "صورة السجل التجاري (إلزامي) *" : "Commercial Registration Document (Mandatory) *"}
                  </Label>
                  <div className="rounded-xl border border-dashed border-border p-4 bg-muted/20 text-center hover:bg-muted/40 transition-colors relative">
                    {crFile ? (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <FileCheck className="size-4 text-brand-green" />
                          <span className="truncate max-w-[280px]">{crFile.name}</span>
                          <span className="text-[11px] text-muted-foreground">
                            ({(crFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setCrFile(null)}
                          className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                        >
                          <X className="size-4" />
                        </Button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <Upload className="size-6 text-muted-foreground mx-auto mb-1.5" />
                        <span className="text-xs font-medium text-brand-green hover:underline">
                          {ar ? "اضغط لرفع صورة أو ملف السجل التجاري" : "Click to upload Commercial Registration"}
                        </span>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          PDF, JPG, PNG (Max 10 MB)
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleCrFileUpload}
                          className="hidden"
                          required
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 2: Applicant Information */}
              <div className="space-y-3.5">
                <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">
                    2
                  </span>
                  {ar ? "بيانات مقدم الطلب (Applicant Information)" : "Applicant Information"}
                </h4>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "الاسم بالكامل *" : "Full Name *"}
                    </Label>
                    <Input
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder={ar ? "المهندس / فلان الفلاني" : "Full Name"}
                      className="mt-1 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "المسمى الوظيفي *" : "Job Title *"}
                    </Label>
                    <Input
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder={ar ? "مدير العقود والمشتريات" : "Procurement Director"}
                      className="mt-1 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "الإدارة أو القسم *" : "Department *"}
                    </Label>
                    <Input
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder={ar ? "إدارة التوريدات والمناقصات" : "Tenders Department"}
                      className="mt-1 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-xs font-semibold">
                      {ar ? "رقم الهاتف / الواتساب *" : "Mobile Number *"}
                    </Label>
                    <Input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+20 100 000 0000"
                      className="mt-1 text-xs font-mono"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Label className="text-xs font-semibold">
                      {ar ? "البريد الإلكتروني لمقدم الطلب *" : "Applicant Email Address *"}
                    </Label>
                    <Input
                      type="email"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="applicant@company.com"
                      className="mt-1 text-xs font-mono"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Purpose & Project Details */}
              <div className="space-y-3.5">
                <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">
                    3
                  </span>
                  {ar ? "تفاصيل طلب التحقق (Verification Purpose)" : "Verification Details"}
                </h4>

                <div>
                  <Label className="text-xs font-semibold">
                    {ar ? "الغرض من طلب التحقق *" : "Purpose of Verification *"}
                  </Label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-medium text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    required
                  >
                    {VERIFICATION_PURPOSES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {ar ? p.ar : p.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label className="text-xs font-semibold">
                    {ar ? "ملاحظات إضافية أو تفاصيل المشروع المستهدف (اختياري)" : "Additional Notes (Optional)"}
                  </Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      ar
                        ? "أذكر أي تفاصيل تود توضيحها لفريق الامتثال بشأن الطلب..."
                        : "Specify any project details or pre-qualification specifics..."
                    }
                    rows={3}
                    className="mt-1 text-xs"
                  />
                </div>
              </div>

              {/* SECTION 4: Optional Supporting Documents */}
              <div className="space-y-3.5">
                <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2 border-b border-border/40 pb-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">
                    4
                  </span>
                  {ar ? "المستندات الإضافية (اختياري)" : "Additional Documents (Optional)"}
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Authorization Letter */}
                  <div className="rounded-xl border border-border/70 p-3 bg-muted/20">
                    <span className="text-xs font-semibold block mb-1">
                      {ar ? "خطاب تفويض من الشركة" : "Company Authorization Letter"}
                    </span>
                    {authLetterFile ? (
                      <div className="flex items-center justify-between text-xs">
                        <span className="truncate max-w-[150px]">{authLetterFile.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setAuthLetterFile(null)}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                        >
                          <X className="size-3" />
                        </Button>
                      </div>
                    ) : (
                      <label className="cursor-pointer flex items-center gap-2 text-xs text-brand-green hover:underline">
                        <Paperclip className="size-3.5" />
                        <span>{ar ? "إرفاق خطاب التفويض" : "Attach Letter"}</span>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.png"
                          onChange={handleAuthFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Proof of Capacity */}
                  <div className="rounded-xl border border-border/70 p-3 bg-muted/20">
                    <span className="text-xs font-semibold block mb-1">
                      {ar ? "مستند إثبات الصفة أو الهوية" : "Proof of Capacity / Identity"}
                    </span>
                    {proofCapacityFile ? (
                      <div className="flex items-center justify-between text-xs">
                        <span className="truncate max-w-[150px]">{proofCapacityFile.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setProofCapacityFile(null)}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                        >
                          <X className="size-3" />
                        </Button>
                      </div>
                    ) : (
                      <label className="cursor-pointer flex items-center gap-2 text-xs text-brand-green hover:underline">
                        <Paperclip className="size-3.5" />
                        <span>{ar ? "إرفاق مستند الإثبات" : "Attach Document"}</span>
                        <input
                          type="file"
                          accept=".pdf,.jpg,.png"
                          onChange={handleProofFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 5: Declarations and Consents */}
              <div className="space-y-3 rounded-2xl bg-muted/40 p-4 border border-border/80">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={declarationConsent}
                    onChange={(e) => setDeclarationConsent(e.target.checked)}
                    className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green"
                    required
                  />
                  <span className="text-xs leading-relaxed text-foreground/90">
                    {ar
                      ? "أقر بصحة جميع البيانات والمستندات المقدمة، وبأنني مخول بتقديم هذا الطلب نيابة عن الشركة المذكورة، وأن الغرض من الطلب مهني وتجاري مشروع."
                      : "I certify the accuracy of all submitted details and documents, that I am authorized to submit this request on behalf of the company, and that the verification purpose is professional and legitimate."}
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer pt-2 border-t border-border/40">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green"
                    required
                  />
                  <span className="text-xs leading-relaxed text-foreground/90">
                    {ar
                      ? "أوافق على معالجة بياناتي ومستنداتي لغرض التحقق من هوية مقدم الطلب وصفته المهنية ومراجعة طلب الاطلاع على مستندات المشروع، وفق سياسة الخصوصية المعمول بها."
                      : "I consent to the processing of corporate and personal information for identity verification and request assessment pursuant to applicable privacy policy."}
                  </span>
                </label>
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/60">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Lock className="size-3.5 text-brand-green" />
                  <span>
                    {ar
                      ? "مستنداتك تخضع لسياسة سرية صارمة ولا تُنشر علنًا"
                      : "All documents protected under strict confidentiality protocols"}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleResetAndClose}
                    className="rounded-full text-xs"
                  >
                    {ar ? "إلغاء" : "Cancel"}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !declarationConsent || !privacyConsent || !crFile}
                    className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-head font-bold px-6 shadow-md"
                  >
                    {isSubmitting
                      ? ar
                        ? "جاري إرسال الطلب..."
                        : "Submitting Request..."
                      : ar
                      ? "إرسال طلب التحقق"
                      : "Submit Request"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
