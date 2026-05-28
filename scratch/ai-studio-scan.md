"## Deep Scan Results: `portal/app/student/ai-studio/page.tsx`

I've completed a thorough analysis of all 1564 lines. Here are all findings organized by severity:

---

### ðŸ”´ CRITICAL (2)

**1. Race condition in chat history sync (Lines 288-302, 305-317, 330-362)**
- `handleNewChat` captures `messages` and `activeChatId` via `useCallback` deps, but `switchToChat` (line 305) is a plain function that **also reads `messages` and `activeChatId` from stale closure scope** â€” it's not wrapped in `useCallback` and not memoized. If `switchToChat` is called right after `setMessages`, it reads the old `messages` state, meaning the current chat's unsaved edits are lost.
- Additionally, in `handleSend` (line 330), when the first message is sent (`!activeChatId`), a new history entry is created at line 360 with `messages: newMessages`. But after the API responds, `setMessages` is called with an updater that **replaces the loading message in the local state only** â€” the `chatHistory` entry created at line 360 **never gets updated** with the final AI response. So if the user switches chats and switches back, they'll see the loading placeholder instead of the actual response.

**2. No AbortController â€” unmounted component continues setting state (Lines 206-248, 364-424)**
- Both `useEffect` blocks fetching `/api/student/me` (line 206) and `/api/ai/history` (line 217) have **no cleanup/abort mechanism**. If the component unmounts before the fetch completes (e.g., user navigates away), `setStudentName`, `setMessages`, `setChatHistory`, `setActiveChatId` will be called on an unmounted component. Same issue with `handleSend` (line 330) â€” if the user navigates away mid-generation, the `.then` / `await` continuation will try to set state on an unmounted component.

---

### ðŸŸ  HIGH (6)

**3. Stale closure in `handleSend` â€” `messages` is captured at call time (Line 387)**
- `const history = messages.filter(...)` on line 387 uses the `messages` value from the **closure at the time `handleSend` was calle
<truncated 8177 bytes>
