import React, { useState } from "react";
import { NewsCmsTab } from "@/components/admin/news-cms-tab";
import { ContactPortalCmsTab } from "@/components/admin/contact-portal-cms-tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ContentCmsSection() {
  const [activeTab, setActiveTab] = useState<"news" | "portal">("news");

  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">إدارة المحتوى المؤسسي والموقع (Content CMS)</h2>
          <p className="text-xs text-slate-400">
            تحرير البيانات الصحفية، أخبار المجموعة، وبوابات الاستفسارات والشكاوى
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="news" className="data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-bold text-xs">
            أخبار وإعلانات المجموعة
          </TabsTrigger>
          <TabsTrigger value="portal" className="data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-bold text-xs">
            إعدادات بوابة التواصل والشكاوى
          </TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="mt-4">
          <NewsCmsTab />
        </TabsContent>

        <TabsContent value="portal" className="mt-4">
          <ContactPortalCmsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
