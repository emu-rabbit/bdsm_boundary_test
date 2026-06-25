# bdsm_boundary_test 決策歷史

## 文件目的

本文件記錄 `bdsm_boundary_test` 中會影響未來工作、且後續 Agent 需要理解「為什麼如此決定」的重要決策。

它不是聊天紀錄、待辦清單或修訂流水帳。若規則能直接寫在 `AGENTS.md`、skill、workflow、architecture、mission 或 README 中並清楚約束 Agent，通常不需要額外寫入本文件。

後續 Agent 在規劃或執行任務前，必須依 `.agents/skills/core/decision_traceability.md` 搜尋本文件，確認是否已有相關決策。

## 使用規則

- 新決策放在「決策紀錄」最上方，方便後續 Agent 先看到最新脈絡。
- 每筆決策必須有穩定 ID，格式建議為 `D-YYYY-MM-DD-序號`。
- 若新決策覆蓋舊決策，不要刪除舊紀錄；應新增一筆修訂決策，並在舊紀錄的狀態或備註中標示已被哪一筆決策修訂。
- 若只是任務待辦、一次性修正、一般規則同步、文件調整過程或尚未確認的討論，不應寫入本文件。
- 每筆決策都必須說明保留理由；若說不出後續 Agent 為何需要查閱它，就不應新增。

## 決策紀錄

### D-2026-06-25-001 - 確認第一版技術棧、資料邊界與匿名防護方向

- **日期**：2026-06-25
- **狀態**：已確認
- **觸發來源**：使用者要求新增技術相關 skill 背景，明確列出本專案為純網頁專案、使用 Vite-Vue + TypeScript + Tailwind、後端使用 Firebase/Firestore、匿名無登入、需資源預熱、Firestore 上傳防刷、匿名識別資料、GA 支援，以及 UI 自刻不使用現成 Vue UI/UX 庫。
- **決策內容**：
  - 本專案技術棧正式確認為 Vite、Vue、TypeScript 與 Tailwind。
  - 後端使用 Firebase，主要僅使用 Firestore 儲存使用者確定要分享的測驗結果。
  - 產品不需要登入系統，需在匿名情境下設計與運行。
  - 雖然匿名，仍需保留最小必要匿名識別資料，用於後端顯示、偵測與處理疑似惡意使用者。
  - Firestore 上傳需有防護機制，同一使用者或匿名識別來源基準為 60 分鐘內最多 5 次、1 天內最多 10 次。
  - 網頁需保持輕量，並針對圖片與大型資源建立預熱機制，以提升使用者流程順暢度。
  - 需要 GA 支援，作為後續研究、產品改進與推廣參考。
  - UI 應由本專案自行實作，不使用現成 Vue UI/UX library。
- **理由**：這是本 repo 第一批正式確認的技術與資料邊界，會影響後續 architecture、Firebase schema、security rules、analytics、效能策略與 UI implementation。將其寫入主文件與決策歷史，可避免後續 Agent 繼續把技術棧視為未確認，或從 sibling repo 帶入登入、membership、不同框架與錯誤後端假設。
- **影響範圍**：
  - `AGENTS.md`
  - `.agents/skills/professional/technical_architecture.md`
  - `.agents/skills/professional/development_standards.md`
  - `.agents/skills/professional/ui_ux_standards.md`
  - 未來 Firebase/Firestore、GA、效能、資源載入與 UI component 實作
- **後續 Agent 行動**：
  - 技術、資料、Firebase、GA、效能或 UI component 相關任務必須讀取 `.agents/skills/professional/technical_architecture.md`。
  - 不得自行引入登入系統、Firebase Auth、membership gate、大型 Vue UI library 或與匿名分享方向衝突的資料模型。
  - 若使用者之後改變技術棧、後端範圍、登入方向、上傳限制或 analytics 邊界，需新增修訂決策並同步相關文件。

### D-2026-06-24-001 - 先移植共通 Agent 行為並保留專案使命空位

- **日期**：2026-06-24
- **狀態**：已確認
- **觸發來源**：使用者要求參考同層 `emu-rabbit.github.io` 專案給 Agent 的基本指令，將適合本專案的共通行為與思考方式移植進來；同時說明本專案未來會有自己的使命，這部分先保留。
- **決策內容**：
  - 本 repo 先建立共通 `.agents` 行為規範、語言規範、目標導向設計、決策追溯、文件同步、開發/UI 基準與分類提交工作流。
  - 不建立 `mission/` 或 `architecture/` 專屬文件，避免在使用者尚未定義前替專案發明使命、架構或品牌方向。
  - 不移植 `emu-rabbit.github.io` 的靜態個人網站定位、視覺方向、部署假設、個人品牌語氣或既有決策。
  - 不移植 Freezer Space 的產品目標、關係脈絡、Flutter/Firebase 架構、登入權限或私密空間規則。
- **理由**：此 repo 的第一個可維護資產是 Agent 工作脈絡。先把共通行為與移植邊界寫清楚，可以讓後續 Agent 具備一致工作習慣，同時避免過早把其他專案的使命或架構套進來。
- **影響範圍**：
  - `AGENTS.md`
  - `.agents/skills/core/*`
  - `.agents/skills/professional/*`
  - `.agents/workflows/add-commit-all.md`
  - `.agents/decisions/decision_history.md`
- **後續 Agent 行動**：
  - 新任務開始前先讀取 `AGENTS.md` 與相關 `.agents` 文件。
  - 若任務涉及長期方向，先確認使用者是否要正式建立 mission 或 architecture 文件。
  - 不把 sibling repo 的產品使命或技術選型當成本 repo 的預設。
